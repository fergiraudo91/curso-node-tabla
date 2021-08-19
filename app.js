
const { crearArchivo } = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
const colors = require('colors');


const { base, list, hasta } = argv;

crearArchivo(base, list, hasta)
    .then( nombreArchivo => console.log(nombreArchivo, " creado".rainbow))
    .catch(err => console.log(err.red));
