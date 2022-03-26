const {Router}=require('express');
const { check } = require('express-validator');
const { createCategory } = require('../controllers/categorias.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router=Router();

// obtener todas las categorias
router.get('/',(req, res) => {
  res.status(200).json({msg: 'get'})
});


// categoria por id
router.get('/:id',(req, res) => {
  res.status(200).json({msg: 'id get'})
});

// crear categoria
router.post('/',[
  validarJWT,
  check('name',"el nombre es obligatorio").not().isEmpty(),
  validarCampos
],createCategory);

// categoria actualizar
router.put('/:id',(req, res) => {
  res.status(200).json({msg: 'put'})
});

// borrar categoria solo si es admin borrar logico
router.delete('/:id',(req, res) => {
  res.status(200).json({msg: 'delete'})
});
module.exports =router;