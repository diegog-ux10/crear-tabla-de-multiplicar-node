const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) => {
    try{
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${colors.blue(base * i)}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync( `Tabla-${base}.txt`, salida);
        if(listar) {
            console.log("==========================".green);
            console.log("Tabla del : ".cyan, base);
            console.log("==========================".green);
            console.log(consola);
        }
        // console.log(`Tabla-${base}.txt Creado`);
        return `Tabla-${base}.txt`;
    } catch(err) {
        throw err;
    }
}


// const crearArchivoTabla = (base = 5) => {
    
//     return new Promise((res, rej) => {
//         console.log("==========================");
//         console.log("Tabla del : ", base);
//         console.log("==========================");
//         let salida = '';
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} x ${i} = ${base * i}\n`
//         }
//         // console.log(salida);
//         fs.writeFileSync( `Tabla-${base}.txt`, sali);
//         // console.log(`Tabla-${base}.txt Creado`);
//         resolve(`Tabla-${base}.txt`) ;
//     })
// }

module.exports = {
    crearArchivoTabla
}