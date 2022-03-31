import { Response, NextFunction } from 'express';
import { createTransport } from 'nodemailer';
const sendEmail = async (option: any) => {
    const transport = createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    
    const message = {
        from: `${process.env.SMTP_FROM_NAME} < ${process.env.SMTP_FROM_EMAIL} >`,
        to: option.email,
        subject: option.subject,
        text: option.message
    }

    await transport.sendMail(message);
}
export default sendEmail