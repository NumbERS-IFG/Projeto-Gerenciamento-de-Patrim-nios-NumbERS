const db = require('../database/conexaoBD');

class Usuario {
    constructor(nome, sobrenome, matricula, senha, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = senha;
        this.cargo = cargo;
        this.email = null;
        this.cpf = null;
        this.userId = null;
    }

    static async findAll() {
        let sql = "SELECT * FROM usuarios";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM usuarios WHERE id_usuario = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(nome, sobrenome, matricula, senha, cargo, email, cpf){
        let sql = "INSERT INTO usuarios (nome, sobrenome, matricula, senha, email, cargo, cpf) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_usuario";
        let result = await db.oneOrNone(sql, [nome, sobrenome, matricula, senha, email, cargo, cpf]);
        return result;
    }

    static async update(nome, sobrenome, matricula, senha, cargo, email, cpf, id){
        let sql = "UPDATE usuarios SET nome = $1, sobrenome = $2, matricula = $3, senha = $4, email = $5, cargo = $6, cpf = $7 WHERE id_usuario = $8";
        await db.oneOrNone(sql, [nome, sobrenome, matricula, senha, email, cargo, cpf, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM usuarios WHERE id_usuario = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Usuario;
