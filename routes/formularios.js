var nodemailer = require("nodemailer");
router.post('/', async(req, res, next) => {
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var mensaje = req.body.mensaje;

    var obj = {
        to: 'fcettus@gmail.com',
        subject: 'CONTACTO WEB',
        html: nombre + "se contacto a travez de la web y quiere mas info a este correo : " + email + ".<br> su tel es: " + tel
    }
var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
    });    
var info = await transport.sendMail(obj);

res.render('contacto', {
    message: 'Enviado correctamente, turri'
    });
});