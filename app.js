const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs');


console.clear();

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombre => console.log(nombre, 'Creado'))
    .catch( err => console.log(err));
