import {Request,Response} from 'express';
import { get } from 'lodash';
// import { get } from 'lodash';
// import { any } from 'zod';
import { createSessionInpute } from '../schema/auth.schema';
import { findSessionById, signAccessToken, signRefreshToken } from '../service/auth.service';
import { findByEmail, findUserById } from '../service/user.service';
import { verifyJwt } from '../utils/jwt';
// import { signJwt } from '../utils/jwt';

export async function createSessionH(req:Request<{},{}, createSessionInpute>, res:Response) {
    
    const {email, password} = req.body;

    const user = await findByEmail(email);

    if(!user){
        return res.send("Invalid email or password")
    }

    if(!user.verified){
        return res.send("Please verify your email")
    }

    const isValid = await user.validatePassword(password)
    if(!isValid){
        return res.send("Invalid email or Password")
    }

    const accessToken = signAccessToken(user);

    const refreshToken = await signRefreshToken({userId: user._id});

    return res.send({
        accessToken,
        refreshToken
    });
}

export async function refreshAccessTokenH(req:Request, res:Response){
    
    const refreshToken = get(req, String('headers.x-refresh'));

    const decoded = verifyJwt<{session:string}>(refreshToken, 'refreshTokenPublicKey');
    if(!decoded){
        return res.status(401).send("Could not refresh access token")
    }
    const session = await findSessionById(decoded.session);

    if(!session || !session.valid){
        return res.status(401).send("Could not refresh access token")
    }

    const user = await findUserById(String(session.user))
    if(!user){
        return res.status(401).send("Could not refresh access token")
    }

    const accessToken = signAccessToken(user);

    return res.send({accessToken})
}