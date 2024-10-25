const db = require("../database/conexaoBD");

class Condicao {
    constructor(condId, condicao) {
        this.condId = condId;
        this.condicao = condicao;
    }

    static async findAll() {
        let sql = "SELECT * FROM condicoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM condicoes WHERE id_condicao = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(condicao){
        let sql = "INSERT INTO condicoes (condicao) VALUES ($1) RETURNING id_condicao";
        let result = await db.oneOrNone(sql, [condicao]);
        return result;
    }

    static async update(condicao, id){
        let sql = "UPDATE condicoes SET condicao = $1 WHERE id_condicao = $2";
        await db.oneOrNone(sql, [condicao, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM condicoes WHERE id_condicao = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Condicao;
