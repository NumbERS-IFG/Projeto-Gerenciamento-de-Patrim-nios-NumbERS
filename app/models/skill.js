const db = require("../database/conexaoBD");

class Skill {
    constructor(skillId, skill) {
        this.skillId = skillId;
        this.skill = skill;
    }

    static async findAll() {
        let sql = "SELECT * FROM skills";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM skills WHERE id_skill = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(skill){
        let sql = "INSERT INTO skills (skill) VALUES ($1) RETURNING id_skill";
        let result = await db.oneOrNone(sql, [skill]);
        return result;
    }

    static async update(skill, id){
        let sql = "UPDATE skills SET skill = $1 WHERE id_skill = $2";
        await db.oneOrNone(sql, [skill, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM skills WHERE id_skill = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Skill;
