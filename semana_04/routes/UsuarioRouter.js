const express = require('express');
const {newUser, listUsers } = require('../controllers/UsuarioController');
const router = express.Router();
//Definimos las rutas

router.get('/', listUsers);
router.post('/', newUser);

module.exports = router;