import sendEmail from './sendEmail';

const sendResetPasswordToken = async(email: string,passwordRestCode: string,firstname:string, id:any) =>{

    const resetUrl = `/user/reset-password?passwordResetCode=${passwordRestCode}&email=${email}`
    const msg = `<p>Please reset password by clicking on the following link: <a href='${resetUrl}'>Reset Password</a></p>`

    return sendEmail(email,"Email confirmation", `<h4>Hello, ${firstname}</h4> ${msg}&id=${id}`)
}


export default sendResetPasswordToken;