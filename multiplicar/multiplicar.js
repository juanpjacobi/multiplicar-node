//requireds
const fs = require('fs'); //paquetes nativos
// const fs = require('express'); paquetes que no son nativos   
// const fs = require('./path');  paquetes crreados por nosotros mismos
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`tabla de ${base}`.red);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);


    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;

        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.tx`);

        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}