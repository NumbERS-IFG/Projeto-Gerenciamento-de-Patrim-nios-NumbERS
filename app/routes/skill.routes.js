const SkillController = require('../controllers/skillController');
const express =require('express');
const router = express.Router();
const skillController = new SkillController();

//CONSULTA TODOS ELEMENTOS
router.get('/', skillController.index);
//CONSULTA UM ELEMENTO PELO ID
router.get('/show/:id', skillController.show);
//INSERE ELEMENTOS
router.post('/store', skillController.store);
//ATUALIZA ELEMENTOS
router.put('/:id', skillController.update);
//ELIMINA ELEMENTOS
router.delete('/delete/:id', skillController.delete);

module.exports = router;
