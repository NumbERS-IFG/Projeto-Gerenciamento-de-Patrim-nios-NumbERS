const Situacao = require("../models/situacao");

class SituacaoController {
    //LISTA TODOS OS ELEMENTOS
    async index(req, res) {
        try {
            let situacoes = await Situacao.findAll();
            return res.status(200).json(situacoes);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível consultar situações.", detalhes: error});
        }
    }

    //LISTA DE ACORDO COM ID
    async show(req, res) {
        try {
            let situacao = await Situacao.findById(req.params.id);
            return res.status(200).json(situacao);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar a situação.", detalhes: error});
        }
    }

    //INSERE ELEMENTOS
    async store(req, res) {
        const { situacao = null } = req.body;

        try {
            let id = await Situacao.save(situacao);
            res.status(201).json({mensagem: "Situação inserida com sucesso!", "id": id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir situação.", detalhes: error});
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { situacao = null } = req.body;
        const id = req.params.id;

        try {
            await Situacao.update(situacao, id);
            res.status(201).json({mensagem: "Situação atualizada com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao atualizar situação.", detalhes: error});
        }
    }

    //ELIMINA ELEMENTOS
    async delete(req, res) {
        const id = req.params.id;

        try {
            await Situacao.delete(id);
            res.status(200).json({mensagem: "Situação excluída com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao excluir situação", detalhes: error});
        }
    }
}

module.exports = SituacaoController;
