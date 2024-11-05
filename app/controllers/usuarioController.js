const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class UsuarioController {
    //LISTA TODOS OS ELEMENTOS
    async index(req, res) {
        try {
            let usuarios = await Usuario.findAll();
            return res.status(200).json(usuarios);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível consultar usuários.", detalhes: error});
        }
    }

    //LISTA USUÁRIOS DE ACORDO COM A MATRICULA
    async show(req, res) {
        try {
            let usuario = await Usuario.findByMatricula(req.params.matricula);
            return res.status(200).json(usuario);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar o usuário.", detalhes: error});
        }
    }

    //REGISTRA USUÁRIOS
    async register(req, res) {
        const { nome, sobrenome, matricula, senha, email = null, cpf = null, cargoId } = req.body;
        if (!nome || !sobrenome || !matricula || !senha || !cargoId)
            return res.status(400).json({mensagem: "Os campos 'Nome', 'Sobrenome', 'Matricula', 'Senha' e 'Cargo' são obrigatórios."});

        const userExists = await Usuario.findByMatricula(matricula);
        if (userExists)
            return res.status(400).json({mensagem: "Usuário existente."});

        try {
            const user = new Usuario({nome, sobrenome, matricula, senha, email, cpf, cargoId});
            user.senha = bcrypt.hashSync(user.senha, 10);
            let id = await Usuario.save(user);
            res.status(201).json({mensagem: "Usuário inserido com sucesso!", id: id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir usuário.", detalhes: error});
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { nome, sobrenome, matricula, senha, email = null, cpf = null, cargoId } = req.body;
        if (!nome || !sobrenome || !matricula || !senha || !cargoId)
            return res.status(400).json({mensagem: "Os campos 'Nome', 'Sobrenome', 'Matricula', 'Senha' e 'Cargo' são obrigatórios."});
        const id = req.params.id;

        try {
            const user = new Usuario({nome, sobrenome, matricula, senha, email, cpf, cargoId});
            await Usuario.update(user, id);
            res.status(201).json({mensagem: "Usuário atualizado com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao atualizar usuário.", detalhes: error})
        }
    }

    //ELIMINA ELEMENTOS
    async delete(req, res) {
        const id = req.params.id;

        try {
            await Usuario.delete(id);
            res.status(200).json({mensagem: "Usuário excluído com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao excluir usuário", detalhes: error});
        }
    }

    async authToken(token) {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await Usuario.findByMatricula(decoded.matricula);
        return user;
    }
}

module.exports = UsuarioController;
