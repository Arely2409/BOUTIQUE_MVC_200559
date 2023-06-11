const {Schema, model} = require('mongoose');
const productoSchema = new Schema({
    codigo:{
        type: String,
        require: true,
        unique: true,
    },
    tipo: String,
    color: String,
    marca: String,
    precio: Number,
    existencia: Number
},{
    versionKey: false,
    timestamps: true 
});
module.exports = model('productos', productoSchema);