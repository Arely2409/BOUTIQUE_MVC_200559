const Producto = require('../Models/Producto.model');
const productosController={};
productosController.obtenerProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
    //res.render('index', {productos});
};

productosController.obtenerProducto = async (req, res) => {
    const producto = await Producto.findOne({codigo:req.params.cod});
    if (producto != null) {
        res.json(producto);
      }else{
        res.json({status:"No Encontrado"});
      }
    //res.error('{"status:":"Producto no localizado"}')
};

productosController.insertarProducto = async (req, res) => {
    const productoInsertado=new Producto(req.body);
    await productoInsertado.save();
    res.json({
        status:"Producto insertado"
    });
    //res.json('{"status:":"Producto almacenado"}');
};

productosController.actualizarProducto = async (req, res) => {
    const respuesta = await Producto.findOneAndUpdate({codigo:req.params.cod},req.body);
    if(respuesta!=null)
        res.json({status:"Producto Actualizado"});
    else
        res.json({status:"No Encontrado"});
};

productosController.eliminarProducto = async (req, res) => {
    const respuesta = await Producto.findOneAndDelete({codigo:req.params.cod});
    if(respuesta!=null)
        res.json({status:"Producto Eliminado"});
    else
        res.json({status:"No Encontrado"});
    //res.json('{"status:":"Producto eliminado"}');
};

module.exports = productosController;
