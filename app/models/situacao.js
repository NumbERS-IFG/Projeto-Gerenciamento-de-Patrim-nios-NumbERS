const db = require("../database/conexaoBD");

class Situacao {
    constructor(sitId, situacao) {
        this.situacao = sitId;
        this.sitId = sitId;
    }

    static async findAll() {
        let sql = "SELECT * FROM situacoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM situacoes WHERE id_situacao = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(situacao){
        let sql = "INSERT INTO situacoes (situacao) VALUES ($1) RETURNING id_situacao";
        let result = await db.oneOrNone(sql, [situacao]);
        return result;
    }

    static async update(situacao, id){
        let sql = "UPDATE situacoes SET situacao = $1 WHERE id_situacao = $2";
        await db.oneOrNone(sql, [situacao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM situacoes WHERE id_situacao = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Situacao;
