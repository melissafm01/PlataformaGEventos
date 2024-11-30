const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');


router.post('/', usuarioController.crearUsuario);
/*{
  "nombre": "Carlos López",
  "email": "lola@jaja",
  "rol": "admin"
}
 */

router.get('/', usuarioController.obtenerUsuarios);
router.get('/:id', usuarioController.obtenerUsuarioPorId);
router.put('/:id', usuarioController.actualizarUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);

module.exports = router;