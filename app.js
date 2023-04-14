
const { crearArchivoTabla } = require('./helpers/multiplicar')

console.clear();

const[ , , arg3 = 'base=5'] = process.argv;
const[, base = 5] = arg3.split('=');
console.log(base);


// const base = 8;

crearArchivoTabla(base)
    .then(nombre => console.log(nombre, 'Creado'))
    .catch( err => console.log(err));
