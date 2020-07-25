/* eslint-disable space-before-blocks */
/* eslint-disable indent */
'use strict'

const letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
var flag

const valoresRepetidos = function (x) {
    const cuentaRepeticiones = x.reduce((contadorLetra, letra) => {
        contadorLetra[letra] = (contadorLetra[letra] || 0) + 1
        return contadorLetra
      }, {})

    if (cuentaRepeticiones.I > 4 || cuentaRepeticiones.V > 1 || cuentaRepeticiones.X > 4 || 
        cuentaRepeticiones.L > 1 || cuentaRepeticiones.C > 4 || cuentaRepeticiones.D > 1 || 
        cuentaRepeticiones.M > 4){
            flag = 0 // repeticiones invalidas
    }
    else {
        flag = 1 // repeticiones validas
    }
    return flag
}

const condicionVLD = function (x, y){
    for (let l = x + 1; l < letras.length; l++){
        if (y == letras[l]){
                flag = 0 // numero invalido pq no les puede seguir una letra de mayor valor
        }
    }
    return flag
}

const esRomano = function (romanos) { // le paso el array de supuestos numeros romanos
    flag = 1
    if (valoresRepetidos(romanos) == 0){
        flag = 0
    } else {
        for (let i = 0; (i < romanos.length) && (flag == 1); i++){
            var pos = letras.indexOf(romanos[i])
            if (romanos[i] == 'M'){
                if (romanos[i + 1] != 'M'){
                    if (romanos[i + 2] == 'M'){
                        if (romanos[i + 1] != 'C'){
                            flag = 0
                        }
                    }
                }
            }
            else if (romanos[i] == 'V' || romanos[i] == 'L' || romanos[i] == 'D'){
                if (i + 1 < romanos.length){ // si no es fin de cadena
                    flag = condicionVLD(pos, romanos[i + 1])
                }
            }
            else if (romanos[i] == 'C'){
                if (romanos[i + 1] != 'C'){
                    if (romanos[i + 1] == 'M' || romanos[i + 1] == 'D'){
                        if (romanos[i + 2] == 'D' || romanos[i + 2] == 'M' || romanos[i + 2] == 'C'){
                            flag = 0
                        }
                    }
                }
            }
            else if (romanos[i] == 'X'){
                if (romanos[i + 1] != 'X'){
                    if (romanos[i + 1] == 'L' || romanos[i + 1] == 'C'){
                        if ((i + 2 < romanos.length) && (romanos[i + 2] != 'V') && (romanos[i + 2] != 'I')){
                            flag = 0
                        }
                    }
                    else if (romanos[i + 1] == 'D' || romanos[i + 1] == 'M'){
                        flag = 0
                    }
                    else if ((romanos[i + 1] == 'V') && (romanos[i + 2] != 'I') && (i + 2 < romanos.length)){
                        flag = 0
                    }
                }
            }
            else if (romanos[i] == 'I'){
                if (i + 1 < romanos.length){ // si no es final de cadena
                    if ((romanos[i + 1] == 'I') && (i + 2 < romanos.length) && (romanos[i + 2] != 'I')){
                            flag = 0 // hay II seguido de algo que no es ni I ni final de cadena
                    }
                    else if ((romanos[i + 1] != 'X') && (romanos[i + 1] != 'V') && (romanos[i + 1] != 'I')){
                        flag = 0
                    }
                    else if (i + 2 < romanos.length){ // si no es final de cadena
                        if ((romanos[i + 1] == 'V') && (romanos[i + 2] == 'I')){
                            flag = 0 //ivi
                        }
                        else if ((romanos[i + 1] == 'X') && 
                                ((romanos[i + 2] == 'V') || (romanos[i + 2] == 'I') || (romanos[i + 2] == 'C'))){
                            flag = 0 // ixv, ixi, ixc
                        }
                    }
                }
            }
        }
    }
    return flag
}

module.exports = {
    "esRomano": esRomano
}

