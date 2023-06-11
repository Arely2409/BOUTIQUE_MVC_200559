const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://are24:arely2409@arely24.yw52a.mongodb.net/Boutique?retryWrites=true&w=majority")
.then(db => console.log("Conectado a mongo")) 
.catch(err => console.error(err));
