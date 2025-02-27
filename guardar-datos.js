const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar transporte de correo
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tuemail@gmail.com",
        pass: "tucontraseña"
    }
});

// Ruta para recibir el formulario
app.post("/enviar-formulario", (req, res) => {
    const { nombre, apellido, correo } = req.body;

    // Simulación de guardado (puedes guardar en una base de datos aquí)
    console.log("Formulario recibido:", req.body);

    // Configuración del correo
    const mailOptions = {
        from: "tuemail@gmail.com",
        to: correo,
        subject: "Confirmación de Registro",
        text: `Hola ${nombre} ${apellido}, tu registro ha sido exitoso.`
    };

    // Enviar correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error al enviar el correo.");
        } else {
            console.log("Correo enviado: " + info.response);
            res.status(200).send("Formulario guardado y correo enviado.");
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
