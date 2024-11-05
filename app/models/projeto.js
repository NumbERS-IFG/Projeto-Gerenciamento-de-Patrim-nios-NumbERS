const db = require("../database/conexaoBD");

class Projeto {
    constructor({projetoId, nome, areaPesquisa, tipoProjeto, descricao}) {
        this.projetoId = projetoId;
        this.nome = nome;
        this.areaPesquisa = areaPesquisa;
        this.tipoProjeto = tipoProjeto;
        this.descricao = descricao;
    }

    static async findAll() {
        let sql = "SELECT * FROM projetos";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM projetos WHERE projeto_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(projeto){
        let sql = "INSERT INTO projetos (nome, area_pesquisa, tipo_projeto, descricao) VALUES ($1, $2, $3, $4) RETURNING projeto_id";
        let result = await db.oneOrNone(sql, [
            projeto.nome,
            projeto.areaPesquisa,
            projeto.tipoProjeto,
            projeto.descricao
        ]);
        return result;
    }

    static async update(projeto){
        let sql = "UPDATE projetos SET nome = $1, area_pesquisa = $2, tipo_projeto = $3, descricao = $4 WHERE projeto_id = $5";
        await db.oneOrNone(sql, [
            projeto.nome,
            projeto.areaPesquisa,
            projeto.tipoProjeto,
            projeto.descricao,
            projeto.projetoId
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM projetos WHERE projeto_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Projeto;
