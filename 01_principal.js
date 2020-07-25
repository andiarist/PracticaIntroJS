/* eslint-disable keyword-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict'

const acciones = require('./02_que_hacer.js')
const fs = require('fs')
let resultado = []

const data = fs.readFileSync('datos.txt', 'utf-8').toUpperCase().split('\r\n')

for (let i = 0; i < data.length; i++){
    // eslint-disable-next-line prefer-const
    var conversion = []
    var condicion = conversion[i] = acciones.decidir(data[i])
    condicion ? resultado[i] = `${data[i]} -> ${conversion[i]}` : resultado[i] = `${data[i]} -> número no válido`
}

console.log(resultado)
const nuevoFicheroAsync = fs.writeFile('datosConvertAsync.txt', resultado.join('\r\n'), 'utf8', (err) => {
    if (err) throw err;
    console.log('Datos guardados de forma asíncrona')
  })

const nuevoFicheroSync = fs.writeFileSync('datosConvertSync.txt', resultado.join('\r\n'))