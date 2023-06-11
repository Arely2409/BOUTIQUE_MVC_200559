const {Router} = require ('express');
const productosController = require('../Controllers/Productos.controller');

const router = Router();
router.get('/', productosController.obtenerProductos);
router.get('/:cod', productosController.obtenerProducto);
router.post('/insertar', productosController.insertarProducto);
//router.get('/editar/:cod', productosController.editarProducto);
router.put('/actualizar/:cod', productosController.actualizarProducto);
router.delete('/eliminar/:cod', productosController.eliminarProducto);

module.exports = router;