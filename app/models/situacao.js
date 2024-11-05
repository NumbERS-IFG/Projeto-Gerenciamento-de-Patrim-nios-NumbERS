const db = require("../database/conexaoBD");

class Situacao {
    constructor(situacaoId, situacao) {
        this.situacaoId = situacaoId;
        this.situacao = situacao;
    }

    static async findAll() {
        let sql = "SELECT * FROM situacoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM situacoes WHERE situacao_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(situacao){
        let sql = "INSERT INTO situacoes (situacao) VALUES ($1) RETURNING situacao_id";
        let result = await db.oneOrNone(sql, [situacao]);
        return result;
    }

    static async update(situacao, id){
        let sql = "UPDATE situacoes SET situacao = $1 WHERE situacao_id = $2";
        await db.oneOrNone(sql, [situacao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM situacoes WHERE situacao_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Situacao;
