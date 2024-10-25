const Instituicao = require("../models/instituicao");

class InstituicaoController {
    //LISTA TODOS OS ELEMENTOS
    async index(req, res) {
        try {
            let instituicoes = await Instituicao.findAll();
            return res.status(200).json(instituicoes);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível consultar instituições.", detalhes: error});
        }
    }

    //LISTA DE ACORDO COM ID
    async show(req, res) {
        try {
            let instituicao = await Instituicao.findById(req.params.id);
            return res.status(200).json(instituicao);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar a instituição.", detalhes: error});
        }
    }

    //INSERE ELEMENTOS
    async store(req, res) {
        const { cnpj = null, nomeinstituicao = null, pesResp = null } = req.body;

        try {
            let id = await Instituicao.save(cnpj, nomeinstituicao, pesResp);
            res.status(201).json({mensagem: "Instituição inserida com sucesso!", "id": id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir instituição.", detalhes: error});
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { cnpj = null, nomeinstituicao = null, pesResp = null } = req.body;
        const id = req.params.id;

        try {
            await Instituicao.update(cnpj, nomeinstituicao, pesResp);
            res.status(201).json({mensagem: "Instituição atualizada com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao atualizar instituição.", detalhes: error});
        }
    }

    //ELIMINA ELEMENTOS
    async delete(req, res) {
        const id = req.params.id;

        try {
            await Instituicao.delete(id);
            res.status(200).json({mensagem: "Instituição excluída com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao excluir instituição", detalhes: error});
        }
    }
}

module.exports = InstituicaoController;
