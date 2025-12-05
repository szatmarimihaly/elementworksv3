
interface EmailTemplateProps {
  name : string;
  email : string;
  tel : string;
  message : string
}

const EmailTemplate = ({ name, email, tel, message } : EmailTemplateProps) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Köszönjük az üzeneted! 🎉</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
              Kedves <strong>${name}</strong>,
            </p>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0 0 30px 0;">
              Megkaptuk az üzenetedet és hamarosan válaszolunk rá! Általában 24 órán belül jelentkezünk.
            </p>
            
            <!-- Message Details Box -->
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea; margin: 30px 0;">
              <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px;">Az üzeneted részletei:</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 12px;"><strong>Név:</strong></td>
                  <td style="padding: 8px 0; color: #333333; font-size: 12px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 12px;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #333333; font-size: 12px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666; font-size: 12px;"><strong>Telefon:</strong></td>
                  <td style="padding: 8px 0; color: #333333; font-size: 12px;">${tel}</td>
                </tr>
              </table>
              
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                <p style="color: #666666; font-size: 14px; margin: 0 0 8px 0;"><strong>Üzenet:</strong></p>
                <p style="color: #333333; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
              Üdvözlettel,<br>
              <strong style="color: #333333;">Az ELEMENTWORKS Csapat</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #e0e0e0;">
            <p style="color: #999999; font-size: 12px; line-height: 1.6; margin: 0;">
              Ez egy automatikus megerősítő email. Kérjük, ne válaszolj rá közvetlenül.
            </p>
            <p style="color: #999999; font-size: 12px; line-height: 1.6; margin: 10px 0 0 0;">
              © ${new Date().getFullYear()} ELEMENTWORKS. Minden jog fenntartva.
            </p>
          </div>
          
        </div>
    </html>
    `;
}

export default EmailTemplate