/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict'

const validar = require('./04_validador_romano.js')

const nums = '0123456789'
const letrasRomanas = 'CDILMVX'
const letrasNoRomanas = 'ABEFGHYJKNÑOPQRSTUWYZ'

function tieneNumeros (texto) {
   for (let i = 0; i < texto.length; i++){
      if (nums.indexOf(texto.charAt(i), 0) !== -1){
         return 1
      }
   }
   return 0
}

const tieneLetras = function (texto){
    texto = texto.toUpperCase()
    var flagNoRomanas = 0
    var flagRomanas = 0
    for (let i = 0; i < texto.length; i++){
        if (letrasRomanas.indexOf(texto.charAt(i), 0) !== -1){
           flagRomanas += 1
        }
        if (letrasNoRomanas.indexOf(texto.charAt(i), 0) !== -1){
            flagNoRomanas += 1
        }
    }
    if (flagRomanas > 0 && flagNoRomanas == 0){
        return 1
    } else {
        return 0
    }
}

const comprobarTipo = function (x){
    if (tieneNumeros(x) === 1){
        if (tieneLetras(x) === 1){
           return 0 // tiene mezcla -> no vale
        }
        // solo numeros
        var y = parseInt(x, 10)
        if (y > 0 && y <= 3999){
            return 1 // devolvemos 1 si es árabe válido
        }
        else{ 
            // el numero es o negativo o mayor de 3999
            return 0
        }
    }
    else {
       if (tieneLetras(x) === 1){
           // solo letras
           if (validar.esRomano(x.split('')) === 1){
            return 2 // devolvemos 2 si romano válido
           }
       }
       return 0
    }
}
module.exports = { comprobarTipo }
