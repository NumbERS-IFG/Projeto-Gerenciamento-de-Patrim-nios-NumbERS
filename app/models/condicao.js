const db = require("../database/conexaoBD");

class Condicao {
    constructor(condicaoId, condicao) {
        this.condicaoId = condicaoId;
        this.condicao = condicao;
    }

    static async findAll() {
        let sql = "SELECT * FROM condicoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM condicoes WHERE condicao_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(condicao){
        let sql = "INSERT INTO condicoes (condicao) VALUES ($1) RETURNING condicao_id";
        let result = await db.oneOrNone(sql, [condicao]);
        return result;
    }

    static async update(condicao, id){
        let sql = "UPDATE condicoes SET condicao = $1 WHERE condicao_id = $2";
        await db.oneOrNone(sql, [condicao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM condicoes WHERE condicao_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Condicao;
