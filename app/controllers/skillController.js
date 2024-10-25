const Skill = require("../models/skill");

class SkillController {
    //LISTA TODOS OS ELEMENTOS
    async index(req, res) {
        try {
            let skills = await Skill.findAll();
            return res.status(200).json(skills);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível consultar skills.", detalhes: error});
        }
    }

    //LISTA DE ACORDO COM ID
    async show(req, res) {
        try {
            let skill = await Skill.findById(req.params.id);
            return res.status(200).json(skill);
        } catch (error) {
            res.status(404).json({mensagem: "Não foi possível encontrar a skill.", detalhes: error});
        }
    }

    //INSERE ELEMENTOS
    async store(req, res) {
        const { skill = null } = req.body;

        try {
            let id = await Skill.save(skill);
            res.status(201).json({mensagem: "Skill inserida com sucesso!", "id": id});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao inserir skill.", detalhes: error});
        }
    }

    //ATUALIZA ELEMENTOS
    async update(req, res) {
        const { skill = null } = req.body;
        const id = req.params.id;

        try {
            await Skill.update(skill, id);
            res.status(201).json({mensagem: "Skill atualizada com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao atualizar skill.", detalhes: error});
        }
    }

    //ELIMINA ELEMENTOS
    async delete(req, res) {
        const id = req.params.id;

        try {
            await Skill.delete(id);
            res.status(200).json({mensagem: "Skill excluída com sucesso!"});
        } catch (error) {
            res.status(406).json({mensagem: "Erro ao excluir skill", detalhes: error});
        }
    }
}

module.exports = SkillController;
