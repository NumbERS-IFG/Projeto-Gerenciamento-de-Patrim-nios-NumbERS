const db = require("../database/conexaoBD");

class Categoria {
    constructor(categoriaId, categoria) {
        this.categoriaId = categoriaId;
        this.categoria = categoria;
    }

    static async findAll() {
        let sql = "SELECT * FROM categorias";
        return await db.manyOrNone(sql);
    }

    static async findById(id) {
        let sql = "SELECT * FROM categorias WHERE categoria_id = $1";
        return await db.oneOrNone(sql, id);
    }

    static async save(categoria){
        let sql = "INSERT INTO categorias (categoria) VALUES ($1) RETURNING categoria_id";
        let result = await db.oneOrNone(sql, [categoria]);
        return result;
    }

    static async update(categoria, id){
        let sql = "UPDATE categorias SET categoria = $1 WHERE categoria_id = $2";
        await db.oneOrNone(sql, [categoria, id]);
    }

    static async delete(id) {
        let sql = "DELETE FROM categorias WHERE categoria_id = $1";
        await db.oneOrNone(sql, id);
    }
}

module.exports = Categoria;
