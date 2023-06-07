import nodemailer, {SendMailOptions} from 'nodemailer';
import nodemailerconfig from './nodemailerconfig';
import config from 'config';

const smtp = config.get<{
    user: string,
    pass:string,
    host: string,
    port: number,
    secure: boolean
}>('smtp')

const sendEmail = async(to:any, subject:any, html:any)=>{
    let testaccount = nodemailer.createTestAccount();

    const transport = nodemailer.createTransport(nodemailerconfig);
    // const transport = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'ericka57@ethereal.email',
    //         pass: 'HDUzHENHWjpk26eh4t'
    //         // user: smtp.user,
    //         // pass: smtp.pass,
    //     }
    // })

    return transport.sendMail({
        from: 'restek <restApi@mail.com>',
        to,
        subject,
        html
    })
}


export default sendEmail;