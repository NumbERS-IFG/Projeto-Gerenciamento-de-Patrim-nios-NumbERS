const db = require("../database/conexaoBD");

class Checkins {
    constructor({checkinId, usuarioId, data, horario}) {
        this.checkinId = checkinId;
        this.data = data;
        this.horario = horario;
        this.usuarioId = usuarioId;
    }

    static async findAll() {
        let sql = "SELECT c.*, u.* FROM checkins c, usuarios u WHERE c.usuario_id = u.usuario_id";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT c.*, u.* FROM checkins c, usuarios u WHERE c.usuario_id = u.usuario_id AND checkin_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(checkin){
        let sql = "INSERT INTO checkins (dataa, horario, usuario_id) VALUES ($1, $2, $3,) RETURNING checkin_id";
        let result = await db.oneOrNone(sql, [
            checkin.data,
            checkin.horario,
            checkin.usuarioId
        ]);
        return result;
    }

    static async update(checkin){
        let sql = "UPDATE checkins SET dataa = $1, horario = $2, usuario_id = $3 WHERE checkin_id = $4";
        await db.oneOrNone(sql, [
            checkin.data,
            checkin.horario,
            checkin.usuarioId,
            checkin.checkinId
        ]);
    }

    static async delete(id) {
        let sql = "DELETE FROM checkins WHERE checkin_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Checkins;
