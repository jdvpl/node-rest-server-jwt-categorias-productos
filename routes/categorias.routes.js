const {Router}=require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

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
router.post('/',(req, res) => {
  res.status(200).json({msg: 'post'})
});

// categoria actualizar
router.put('/:id',(req, res) => {
  res.status(200).json({msg: 'put'})
});

// borrar categoria solo si es admin borrar logico
router.delete('/:id',(req, res) => {
  res.status(200).json({msg: 'delete'})
});
module.exports =router;