import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { db } from "@/db";
import { promo } from "@/db/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req : NextRequest) {
    try{
        const { email } = await req.json();

        if(!email || typeof email !== "string") {
            return NextResponse.json(
                { error : "Valid email is required" },
                { status : 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return NextResponse.json(
                { error : "Please provide a valid email address" },
                { status : 400 }
            );
        }

        const emailUsername = email.split("@")[0].replace(/\./g, '-');
        const promoCode = `${emailUsername}`;

        const id = nanoid();

        await db.insert(promo).values({
            id,
            email,
            promo : promoCode
        });

        try{
            await resend.emails.send({
                from : "ELEMENTWORKS <no-reply@elementworks.eu>",
                to : [email],
                subject: "Promóciós kódod érkezett! 🎉",
                html:`
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                                <h1 style="color: white; margin: 0;">Promóciós kódod megérkezett!</h1>
                            </div>
                            
                            <div style="background-color: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
                                <p style="font-size: 16px; margin-bottom: 20px;">
                                    Köszönjük, hogy regisztráltál promóciós programunkban, elküldtük neked az ajánlói kódodat:
                                </p>
                                
                                <div style="background-color: white; border: 2px dashed #667eea; border-radius: 8px; padding: 20px; text-align: center; margin: 30px 0;">
                                    <code style="font-size: 24px; font-weight: bold; color: #667eea; letter-spacing: 2px;">
                                        ${promoCode}
                                    </code>
                                </div>
                                
                                <p style="font-size: 14px; color: #666; margin-top: 30px;">
                                    Köszönettel,<br>
                                    <strong>Elementworks</strong>
                                </p>
                            </div>
                            
                            <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                                <p>© 2026 Elementworks. All rights reserved.</p>
                            </div>
                        </body>
                    </html>
                `,
            })
        }catch(emailError) {
            console.log("Email sending failed: ", emailError)
        }

        return NextResponse.json(
            {
                success : true,
                message : "Successfully subscribed! Check your promo code below.",
                promoCode
            },
            { status : 200 }
        )
    } catch(error : any) {
        if (error?.code === '23505') {
            return NextResponse.json(
                { error: 'This email is already subscribed' },
                { status: 409 }
            );
        }

        console.error('Subscription error:', error);
            return NextResponse.json(
                { error: 'Failed to process subscription. Please try again.' },
                { status: 500 }
        );
    }
}