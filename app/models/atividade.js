const db = require("../database/conexaoBD");

class Atividade {
    constructor(ativId, nome, descricao) {
        this.ativId = ativId;
        this.nome = nome;
        this.descricao = descricao;
    }

    static async findAll() {
        let sql = "SELECT * FROM atividades";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM atividades WHERE id_atividade = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(nome, descricao){
        let sql = "INSERT INTO atividades (nome, descricao) VALUES ($1, $2) RETURNING id_atividade";
        let result = await db.oneOrNone(sql, [nome, descricao]);
        return result;
    }

    static async update(nome, descricao, id){
        let sql = "UPDATE atividades SET nome = $1, descricao = $2 WHERE id_atividade = $3";
        await db.oneOrNone(sql, [nome, descricao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM atividades WHERE id_atividade = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Atividade;
