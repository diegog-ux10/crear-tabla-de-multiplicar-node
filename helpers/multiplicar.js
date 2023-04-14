const fs = require('fs');
const { resolve } = require('path');

const crearArchivoTabla = async(base = 5) => {
    try{
        console.log("==========================");
        console.log("Tabla del : ", base);
        console.log("==========================");
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        // console.log(salida);
        fs.writeFileSync( `Tabla-${base}.txt`, salida);
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