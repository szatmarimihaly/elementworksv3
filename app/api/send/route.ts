import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const tel = formData.get('tel') as string;
        const message = formData.get('message') as string;

        const { error } = await resend.emails.send({
            from: 'ELEMENTWORKS <no-reply@elementworks.eu>',
            to: [email],
            subject: "Üzeneted megkaptuk! / We received your message!",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                    <h2 style="color: #333;">Köszönjük az üzeneted! 🎉</h2>
                    <p style="color: #666; line-height: 1.6;">
                        Kedves <strong>${name}</strong>,
                    </p>
                    <p style="color: #666; line-height: 1.6;">
                        Megkaptuk az üzenetedet és hamarosan válaszolunk rá!
                    </p>
                    
                    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">Az üzeneted részletei:</h3>
                        <p style="color: #666; margin: 5px 0;"><strong>Név:</strong> ${name}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Telefon:</strong> ${tel}</p>
                        <p style="color: #666; margin: 5px 0;"><strong>Üzenet:</strong></p>
                        <p style="color: #666; margin: 5px 0; white-space: pre-wrap;">${message}</p>
                    </div>

                    <p style="color: #666; line-height: 1.6;">
                        Üdvözlettel,<br>
                        <strong>Az ELEMENTWORKS Csapat</strong>
                    </p>

                    <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
                    
                    <p style="color: #999; font-size: 12px; line-height: 1.6;">
                        Ez egy automatikus megerősítő email. Kérjük, ne válaszolj rá.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json({ error: error.message }, { status: 400 })
        }
        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('API error: ', error)
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}