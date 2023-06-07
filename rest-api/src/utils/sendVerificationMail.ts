import sendEmail from "./sendEmail";

const sendEmailVerification = async(email:string,verificationCode:string,firstname:string,id:any) =>{
    const verifyEmail = `token=${verificationCode}&${email}&${id}`

    const msg =  `<p>Please confrirm your email by clicking on the link : <a href='${verifyEmail}'>veriify email</a> </p>`

    return sendEmail(email,"Email confirmation", `<h4>Hello, ${firstname}</h4> ${msg}`)
}


export default sendEmailVerification;