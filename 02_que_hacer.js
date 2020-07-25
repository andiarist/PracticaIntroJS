/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict'

const comprobar = require('./03_comprobaciones.js')
const conversorArabe = require('./05_conversor_a_arabe.js')
const conversorRomano = require('./06_conversor_a_romano.js')
var numeroConvert

const decidir = function(numero){
    let x = comprobar.comprobarTipo(numero)
    if (x === 1){
        numero = parseInt(numero, 10)
        numeroConvert = conversorRomano.deDecimalARomano(numero)
        return numeroConvert
    } else if (x === 2){
        numero = numero.split('')
        numeroConvert = conversorArabe.deRomanoADecimal(numero)
        return numeroConvert
    } else {
        return 0
    }
}
module.exports = { decidir }
