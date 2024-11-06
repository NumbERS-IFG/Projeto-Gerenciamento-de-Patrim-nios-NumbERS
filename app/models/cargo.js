const db = require("../database/conexaoBD");

class Cargo {
    constructor({ cargoId, cargo, nivelAcesso }) {
        this.cargoId = cargoId;
        this.cargo = cargo;
        this.nivelAcesso = nivelAcesso;
    }

    static async findAll() {
        let sql = "SELECT * FROM cargos";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM cargos WHERE cargo_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(cargo){
        let sql = "INSERT INTO cargos (cargo, nivel_acesso) VALUES ($1, $2) RETURNING cargo_id";
        let result = await db.oneOrNone(sql, [
            cargo.cargo,
            cargo.nivelAcesso
        ]);
        return result;
    }

    static async update(cargo){
        let sql = "UPDATE cargos SET cargo = $1, nivel_acesso = $2 WHERE cargo_id = $3";
        await db.oneOrNone(sql, [
            cargo.cargo,
            cargo.nivelAcesso,
            cargo.cargoId
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM cargos WHERE cargo_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Cargo;
