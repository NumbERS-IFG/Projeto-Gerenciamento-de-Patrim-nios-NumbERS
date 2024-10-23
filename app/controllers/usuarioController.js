const db = require("../database/conexaoBD");
const Usuario = require("../models/usuario");

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

    //LISTA DE ACORDO COM ID
    async show(req, res) {
        try {
            let usuario = await Usuario.findById(req.params.id);
            return res.status(200).json(usuario);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar o usuário.", detalhes: error});
        }
    }

        //INSERE ELEMENTOS
    async store(req, res) {
        const { nome, sobrenome, matricula, senha, cargo, email = null, cpf = null } = req.body;

        try {
            let id = await Usuario.save(nome, sobrenome, matricula, senha, cargo, email, cpf);
            res.status(201).json({mensagem: "Usuário inserido com sucesso!", "id": id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir usuário.", detalhes: error})
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { nome, sobrenome, matricula, senha, cargo, email = null, cpf = null } = req.body;
        const id = req.params.id;

        try {
            await Usuario.update(nome, sobrenome, matricula, senha, cargo, email, cpf, id);
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
}

module.exports = UsuarioController;