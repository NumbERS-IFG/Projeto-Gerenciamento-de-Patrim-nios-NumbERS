//PELO AMOR DE DEUS EU TENHO QUE ARRUMAR ISSO!!!

const db = require("../database/conexaoBD.js");

class UsuarioController {
    constructor(db) {
        this.db = db;
    }

    //LISTA TODOS OS ELEMENTOS
    index(req, res) {
        const sql = "SELECT * FROM usuarios";
        db.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).json(result);
            }
        })
    }

    // //LISTA DE ACORDO COM ID
    // show(req, res) {}

    //INSERE ELEMENTOS
    store(req, res) {
        const sql = "INSERT INTO usuarios SET ?";
        const usuario = req.body;
        db.query(sql, usuario,(err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).json(result);
            }
        })
    }

    // //ATUALIZA ELEMENTOS
    // update(req, res) {}
    //
    // //ELIMINA ELEMENTOS
    // delete(req, res) {}
}

module.exports = UsuarioController;