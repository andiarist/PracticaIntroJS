/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict'
const deDecimalARomano = function (n){
    let resultado = []
    const romanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
    const decimales = [1, 5, 10, 50, 100, 500, 1000]
    let posicion

    for (let i = 6; romanos[i]; i--){
        let rom = romanos[i]
        let dec = decimales[i]
        if (n >= dec){
            var resto = Math.floor(n / dec)
            n -= resto * dec

            if (resto < 4){
                while (resto > 0){
                    resultado.push(rom)
                    resto--
                }
            } else {
                let letraFuera = resultado.pop()
                posicion = (letraFuera ? decimales.indexOf(letraFuera) : i) + 1
                let letrasDentro = rom + (romanos[posicion] || 'M')
                resultado.push(letrasDentro)
            }
        } else {
            // añadimos uno en blanco por si tenemos que restar
            resultado.push('')
        }
    }
    return resultado.join('')
}

module.exports = { deDecimalARomano }
