const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

class AuthController {
    async login(req, res){
        const { matricula, senha } = req.body;
        if (!matricula || !senha)
            return res.status(400).json({mensagem: "Os campos 'Matricula' e 'Senha' são obrigatórios."});

        const user = await Usuario.findByMatricula(matricula);
        if (!user)
            return res.status(400).json({mensagem: "Usuário não encontrado."});

        const samePassword = await bcrypt.compare(senha, user.senha);
        if (!samePassword)
            return res.status(400).json({mensagem: "Senha incorreta."});

        const token = jwt.sign({id: user.usuarioId /*isso aqui não tá retornando*/, matricula: user.matricula}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
        user.senha = undefined;
        res.status(200).json({ chaveAcesso: token, usuario: user });
    }

    authToken(req, res, next){
        const tokenHeader = req.headers['authorization'];
        const token = tokenHeader && tokenHeader.split(' ')[1];
        if(!token)
            return res.status(403).json({mensagem: "Não autorizado. Faça login."});

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err)
                return res.status(403).json({mensagem: "Não autorizado. Faça login."});
            req.user = decoded;
            next();
        })
    }
}

module.exports = AuthController;