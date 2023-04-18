const { describe } = require('yargs');

const argv = require('yargs').options({
    'b': {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es el numero del cual se va a crear la tabla'
    },
    'l': {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Imprime la tabla creada en consola'
    },
    'h':{
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta donde quieres realizar la multiplicacion'
    }
}).check((argv, options) =>{
    if(isNaN(argv.b)) {
        throw 'La Base tiene que ser un numero';
    }
    return true;
}).argv

module.exports = argv;
