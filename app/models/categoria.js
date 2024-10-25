const db = require("../database/conexaoBD");

class Categoria {
    constructor(catId, categoria) {
        this.catId = catId;
        this.categoria = categoria;
    }

    static async findAll() {
        let sql = "SELECT * FROM categorias";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM categorias WHERE id_categoria = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(categoria){
        let sql = "INSERT INTO categorias (categoria) VALUES ($1) RETURNING id_categoria";
        let result = await db.oneOrNone(sql, [categoria]);
        return result;
    }

    static async update(categoria, id){
        let sql = "UPDATE categorias SET categoria = $1 WHERE id_categoria = $2";
        await db.oneOrNone(sql, [categoria, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM categorias WHERE id_categoria = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Categoria;
