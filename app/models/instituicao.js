const db = require("../database/conexaoBD");

class Instituicao {
    constructor(instId, cnpj, nome, pesResp) {
        this.instId = instId;
        this.cnpj = cnpj;
        this.nome = nome;
        this.pesResp = pesResp;
    }

    static async findAll() {
        let sql = "SELECT * FROM instituicoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM instituicoes WHERE id_instituicao = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(cnpj, nome, pesResp){
        let sql = "INSERT INTO instituicoes (cnpj, nomeinstituicao, pesresponsavel) VALUES ($1, $2, $3) RETURNING id_instituicao";
        let result = await db.oneOrNone(sql, [cnpj, nome, pesResp]);
        return result;
    }

    static async update(cnpj, nome, pesResp, id){
        let sql = "UPDATE instituicoes SET cpnj = $1, nomeinstituicao = $2, pesresponsavel = $3 WHERE id_instituicao = $4";
        await db.oneOrNone(sql, [cnpj, nome, pesResp, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM instituicoes WHERE id_instituicao = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Instituicao;
