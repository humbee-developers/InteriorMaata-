import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { fullName, Emaildata,Phonedata ,Addressdata, Descriptiondata } = await request.json();

        const transporter = nodemailer.createTransport({
            // service: 'zoho',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'jaykalariya.humbee@gmail.com',
                pass: "wecdoqzwxfcifkss"                                                                    
            }
        })

        const mailOption = {
            from: 'jaykalariya.humbee@gmail.com',
            to: 'jaykalariya.humbee@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <li> Name: ${fullName}</li>
        <li> Email: ${Emaildata}</li> 
        <li> Phone: ${Phonedata}</li> 
        <li> Address: ${Addressdata}</li> 
        <li> Description: ${Descriptiondata}</li> 
        `
        }

        await transporter.sendMail(mailOption)
        console.log(mailOption);
        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}