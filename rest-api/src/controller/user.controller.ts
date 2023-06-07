import {Response, Request, text} from 'express'
// import { subtract } from 'lodash';
import { createUserInput, verifyUserInput, forgotPasswordInput, resetPasswordInput } from '../schema/user.schema';
import {createUser, findByEmail, findUserById} from '../service/user.service'
import { sendEmail } from '../utils/mailer';
import sendEmailVerification from '../utils/sendVerificationMail';
// import crupto from 'crypto;'
import crypto from 'crypto';
import sendResetPasswordToken from '../utils/sendResetPasswordMail';


export async function createUserH(req:Request<{}, {}, createUserInput>, res:Response) {
    const body = req.body

    try {
        const user = await createUser(body);

        // await sendEmail({
        //     from: 'test@ecample.com', 
        //     to: user.email,
        //     subject: 'Please verify your account',
        //     text: `Verification code ${user.verificationCode}. Id: ${user._id}` 
        // });

        await sendEmailVerification(
            user.email,
            user.verificationCode,
            user.firstname,
            user._id
        );
        console.log(user)
        return res.status(201).json({data: user});
    } catch (e:any) {
        if(e.code === 11000){
            return res.status(400).json({msg: "Account already exists"})
        }

        return res.status(500).json(e);
    }
}

export async function verifyUserH(req: Request<verifyUserInput>,res: Response) {
    const id = req.params.id
    const verificationCode = req.params.verificationCode

    // find user by id
    const user = await findUserById(id);

    if(!user){
        return res.send('Could not verify user')
    }

    if(user.verified){
        return res.send('User already verified')
    }

    if(user.verificationCode === verificationCode){
        user.verified = true,
        await user.save();
        return res.send('User verified successfully')
    }
    return res.status(400).json({msg: 'Could not verify user'})
    //
}

export async function forgotPasswordH(req:Request<{},{}, forgotPasswordInput>,res:Response) {

    const msg = 'If a user with that email is registered, you will recieve a password rest email'
    const {email} = req.body;

    const user = await findByEmail(email);

    if(!user){
        return res.send(msg)
    }

    if(!user.verified){
        return res.send("User is not verified")
    }

    const passwordRestCode = crypto.randomBytes(70).toString('hex');

    user.passwordRestCode = passwordRestCode;
    await user.save()

    await sendResetPasswordToken(
        user.email,
        user.passwordRestCode,
        user.firstname,
        user._id
    );

    // await sendEmail({
    //     from: 'test@ecample.com', 
    //     to: user.email,
    //     subject: 'Reset password',
    // text: `passwordResetCode ${user.passwordRestCode}.` 
    // });

    return res.send(msg)
}

export async function resetPasswordH(req: Request<resetPasswordInput["params"],{},resetPasswordInput['body']>,res: Response) {
    const {id, passwordResetCode} = req.params;
    const {password} = req.body;
    const user = await findUserById(id);

    if(
        !user || 
        !user.passwordRestCode ||
        user.passwordRestCode !== passwordResetCode
    ){
        return res.status(400).send("Could not reset user password")
    }

    user.passwordRestCode = null
    user.password = password
    await user.save();

    return res.send("Successfully updated user password")
}

export async function getCurrentUser(req:Request, res:Response){
    return res.send(res.locals.user)
}