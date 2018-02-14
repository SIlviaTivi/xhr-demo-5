const express = require('express');
//guarda funcionde esde expres en una variable
const app = express();
// crea melas deperndiencias
const server = app.listen(3000, encender);// puerto 3000
function encender(){
    console.log('servidor encendido')
}

app.use(express.static('public'));
