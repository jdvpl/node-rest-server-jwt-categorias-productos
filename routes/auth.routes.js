const {Router}=require('express');
const { check } = require('express-validator');
const { login, googleSignin } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');

const router=Router();


router.post('/login',[
  check('email',"El correo es obligatorio").isEmail(),
  check('password',"La contraseña es obligatoria").not().isEmpty(),
  validarCampos
],login);
router.post('/google',[
  check('id_token',"El token de google es necesario").not().isEmpty(),
  validarCampos
],googleSignin);



module.exports =router;