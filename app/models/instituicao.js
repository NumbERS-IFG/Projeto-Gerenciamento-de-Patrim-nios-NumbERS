const db = require("../database/conexaoBD");

class Instituicao {
    constructor({instituicaoId, cnpj, nome, pesResponsavel}) {
        this.instituicaoId = instituicaoId;
        this.nome = nome;
        this.cnpj = cnpj;
        this.pesResponsavel = pesResponsavel;
    }

    static async findAll() {
        let sql = "SELECT * FROM instituicoes";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM instituicoes WHERE instituicao_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(instituicao){
        let sql = "INSERT INTO instituicoes (nome, cnpj, pes_responsavel) VALUES ($1, $2, $3) RETURNING instituicao_id";
        let result = await db.oneOrNone(sql, [
            instituicao.nome,
            instituicao.cnpj,
            instituicao.pesResponsavel
        ]);
        return result;
    }

    static async update(instituicao){
        let sql = "UPDATE instituicoes SET nome = $1, cnpj = $2, pes_responsavel = $3 WHERE instituicao_id = $4";
        await db.oneOrNone(sql, [
            instituicao.cnpj,
            instituicao.nome,
            instituicao.pesResponsavel,
            instituicao.instituicaoId
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM instituicoes WHERE instituicao_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Instituicao;
