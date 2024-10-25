const Projeto = require("../models/projeto");

class ProjetoController {
    //LISTA TODOS OS ELEMENTOS
    async index(req, res) {
        try {
            let projetos = await Projeto.findAll();
            return res.status(200).json(projetos);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível consultar projetos.", detalhes: error});
        }
    }

    //LISTA DE ACORDO COM ID
    async show(req, res) {
        try {
            let projeto = await Projeto.findById(req.params.id);
            return res.status(200).json(projeto);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar o projeto.", detalhes: error});
        }
    }

    //INSERE ELEMENTOS
    async store(req, res) {
        const { nome = null, areapesquisa = null, tipoprojeto = null, descricao = null } = req.body;

        try {
            let id = await Projeto.save(nome, areapesquisa, tipoprojeto, descricao);
            res.status(201).json({mensagem: "Projeto inserido com sucesso!", "id": id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir projeto.", detalhes: error});
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { nome = null, areapesquisa = null, tipoprojeto = null, descricao = null } = req.body;
        const id = req.params.id;

        try {
            await Projeto.update(nome, areapesquisa, tipoprojeto, descricao, id);
            res.status(201).json({mensagem: "Projeto atualizado com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao atualizar projeto.", detalhes: error})
        }
    }

    //ELIMINA ELEMENTOS
    async delete(req, res) {
        const id = req.params.id;

        try {
            await Projeto.delete(id);
            res.status(200).json({mensagem: "Projeto excluído com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao excluir projeto", detalhes: error});
        }
    }
}

module.exports = ProjetoController;
