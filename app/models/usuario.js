const db = require('../database/conexaoBD');

class Usuario {
    constructor({ usuarioID, nome, sobrenome, matricula, senha, email, cpf, cargoId }) {
        this.usuarioID = usuarioID;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.matricula = matricula;
        this.senha = senha;
        this.email = email;
        this.cpf = cpf;
        this.cargoId = cargoId;
    }

    static async findAll() {
        let sql = "SELECT u.*, c.* FROM usuarios u, cargos c WHERE u.cargo_id = c.cargo_id";
        return await db.manyOrNone(sql);
    }

    static async findByMatricula(matricula) {
        let sql = "SELECT u.*, c.* FROM usuarios u, cargos c WHERE u.cargo_id = c.cargo_id AND matricula = $1";
        return await db.oneOrNone(sql, matricula);
    }

    static async save(user){
        let sql = "INSERT INTO usuarios (nome, sobrenome, matricula, senha, email, cpf, cargo_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING usuario_id";
        let result = await db.oneOrNone(sql, [
            user.nome,
            user.sobrenome,
            user.matricula,
            user.senha,
            user.email,
            user.cpf,
            user.cargoId
        ]);
        return result;
    }

    static async update(user, id){
        let sql = "UPDATE usuarios SET nome = $1, sobrenome = $2, matricula = $3, senha = $4, email = $5, cpf = $6, cargo_id = $7 WHERE usuario_id = $8";
        await db.oneOrNone(sql, [
            user.nome,
            user.sobrenome,
            user.matricula,
            user.senha,
            user.email,
            user.cpf,
            user.cargoId,
            id
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM usuarios WHERE usuario_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Usuario;
