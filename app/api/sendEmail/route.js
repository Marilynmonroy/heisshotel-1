import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, movil, correo } = body;

    // console.log("Request body:", body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // Enviando para o próprio email configurado
      subject: `Mas informacion: Heiss Hotel`,
      html: `
   <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333">
      <h1 style="color: #333; text-align: center">Nuevo Contacto</h1>
      <p>Hola,</p>
      <p>
        Has recibido un nuevo contacto a través del formulario de tu sitio web.
        Aquí están los detalles:
      </p>
      <table style="width: 50%; border-collapse: collapse; margin-bottom: 20px">
        <tr>
          <td
            style="
              padding: 10px;
              border: 1px solid #242424;
              background-color: #f9f9f9;
              width: 10%;
            "
          >
            <strong>Nombre:</strong>
          </td>
          <td style="padding: 10px; border: 1px solid #242424">${nombre}</td>
        </tr>
        <tr>
          <td
            style="
              padding: 10px;
              border: 1px solid #242424;
              background-color: #f9f9f9;
            "
          >
            <strong>Móvil:</strong>
          </td>
          <td style="padding: 10px; border: 1px solid #242424">${movil}</td>
        </tr>
        <tr>
          <td
            style="
              padding: 10px;
              border: 1px solid #242424;
              background-color: #f9f9f9;
            "
          >
            <strong>Correo:</strong>
          </td>
          <td style="padding: 10px; border: 1px solid #242424">${correo}</td>
        </tr>
      </table>
    </div>
`,
    };

    console.log("Mail options:", mailOptions);

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}
