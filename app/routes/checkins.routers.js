const CheckinsCheckins = require('../controllers/checkinController');
const express =require('express');
const router = express.Router();
const checkinsController = new CheckinsCheckins();

//CONSULTA TODOS ELEMENTOS
router.get('/', checkinsController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', checkinsController.show);
//INSERE ELEMENTOS
router.post('/store', checkinsController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', checkinsController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', checkinsController.delete);

module.exports = router;
