const AtividadeController = require('../controllers/atividadeController');
const express =require('express');
const router = express.Router();
const atividadeController = new AtividadeController();

//CONSULTA TODOS ELEMENTOS
router.get('/', atividadeController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', atividadeController.show);
//INSERE ELEMENTOS
router.post('/store', atividadeController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', atividadeController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', atividadeController.delete);

module.exports = router;
