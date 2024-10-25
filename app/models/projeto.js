const db = require("../database/conexaoBD");

class Projeto {
    constructor(projId, nome, areaPesquisa, tipoProjeto, descricao) {
        this.projId = projId;
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
        let sql = "SELECT * FROM projetos WHERE id_projeto = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(nome, areaPesquisa, tipoProjeto, descricao){
        let sql = "INSERT INTO projetos (nome, areapesquisa, tipoprojeto, descricao) VALUES ($1, $2, $3, $4) RETURNING id_projeto";
        let result = await db.oneOrNone(sql, [nome, areaPesquisa, tipoProjeto, descricao]);
        return result;
    }

    static async update(nome, areaPesquisa, tipoProjeto, descricao, id){
        let sql = "UPDATE projetos SET nome = $1, areapesquisa = $2, tipoprojeto = $3, descricao = $4 WHERE id_projeto = $5";
        await db.oneOrNone(sql, [nome, areaPesquisa, tipoProjeto, descricao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM projetos WHERE id_projeto = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Projeto;
