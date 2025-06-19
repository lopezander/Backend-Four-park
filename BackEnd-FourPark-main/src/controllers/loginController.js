const Login = require("../models/loginModel");
const md5 = require("crypto-js/md5");
const axios = require("axios");

exports.loginCliente = async (req, res) => {
  try {
    const { correo_electronico, contrasena, recaptchaToken } = req.body;

    // Verificar el token de reCAPTCHA
    const secretKey = "6LehPe0pAAAAADQ1zhF5HxVIaud6oLWMGcWT5p3Z"; //aqui va el captcha
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

    const response = await axios.post(verificationURL);
    if (!response.data.success) {
      return res
        .status(400)
        .json({ message: "Error de verificación de reCAPTCHA" });
    }

    // Buscar el usuario en la base de datos usando el correo electrónico
    const usuario = await Login.findByCorreo(correo_electronico);
    if (!usuario) {
      return res.status(404).json({ message: "Este usuario no existe" });
    }
    const hash = md5(contrasena, "hex").toString();
    // Comparar la contraseña proporcionada (hashed) con la almacenada
    if (hash !== usuario.contrasena) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const rol = await Login.findrol(correo_electronico);
    if (rol == "1") {
      res.status(200).json({ message: "Sesion Iniciada como gerente" });
    }
    const { contrasena: trash, ...data } = usuario;
    // Si las contraseñas coinciden, iniciar sesión
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
