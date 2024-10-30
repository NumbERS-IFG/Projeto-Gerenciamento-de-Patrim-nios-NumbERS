const db = require("../database/conexaoBD");

class Checkins {
    constructor(checkinsId, usuarioId, data, hora) {
        this.checkinsId = checkinsId;
        this.usuarioId = usuarioId;
        this.data = data;
        this.hora = hora;
    }

    static async findAll() {
        let sql = "SELECT * FROM checkins";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM checkins WHERE id_checkins = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(usuarioId, data, hora){
        let sql = "INSERT INTO checkins (usuarioId, data, hora) VALUES ($1, $2, $3,) RETURNING id_checkins";
        let result = await db.oneOrNone(sql, [usuarioId, data, hora]);
        return result;
    }

    static async update(usuarioId, data, hora, id){
        let sql = "UPDATE checkins SET usuaroId = $1, data = $2, hora = $3 WHERE id_checkins = $4";
        await db.oneOrNone(sql, [usuarioId, data, hora, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM checkins WHERE id_checkins = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Checkins;
