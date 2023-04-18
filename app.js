const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('yargs').options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true
    },
    'l': {
        alias: 'listar',
        type: 'boolean',
        default: false,
    }
}).check((argv, options) =>{
    if(isNaN(argv.b)) {
        throw 'La Base tiene que ser un numero';
    }
    return true;
}).argv

console.clear();

crearArchivoTabla(argv.b, argv.l)
    .then(nombre => console.log(nombre, 'Creado'))
    .catch( err => console.log(err));
