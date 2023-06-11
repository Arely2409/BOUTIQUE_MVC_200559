const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3300); 
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false})); //para formularios html
app.use(morgan('dev'));
app.use(require('./Routes/productos.routes'));
module.exports = app;