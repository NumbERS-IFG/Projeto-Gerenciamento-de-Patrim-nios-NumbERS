const db = require("../database/conexaoBD");

class Atividade {
    constructor({atividadeId, nome, descricao}) {
        this.atividadeId = atividadeId;
        this.nome = nome;
        this.descricao = descricao;
    }

    static async findAll() {
        let sql = "SELECT * FROM atividades";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM atividades WHERE atividade_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(atividade){
        let sql = "INSERT INTO atividades (nome, descricao) VALUES ($1, $2) RETURNING atividade_id";
        let result = await db.oneOrNone(sql, [
            atividade.nome,
            atividade.descricao
        ]);
        return result;
    }

    static async update(atividade){
        let sql = "UPDATE atividades SET nome = $1, descricao = $2 WHERE atividade_id = $3";
        await db.oneOrNone(sql, [
            atividade.nome,
            atividade.descricao,
            atividade.atividadeId
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM atividades WHERE atividade_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Atividade;
