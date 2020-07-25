/* eslint-disable indent */
/* eslint-disable space-before-blocks */
'use strict'
const deRomanoADecimal = function (n){
    let numero = 0
    for (let i = 0; i < n.length; i++){
        switch (n[i]){
            case 'M':
                numero += 1000
                break
            case 'D':
                numero += 500
                break
            case 'C':
                if (n[i + 1] == 'D' || n[i + 1] == 'M'){
                    numero -= 100
                } else {
                    numero += 100
                }
                break
            case 'L':
                numero += 50
                break
            case 'X':
                if (n[i + 1] == 'L' || n[i + 1] == 'C'){
                    numero -= 10
                } else {
                    numero += 10
                }
                break
            case 'V':
                numero += 5
                break
            case 'I':
                if (n[i + 1] == 'V' || n[i + 1] == 'X'){
                    numero -= 1
                } else {
                    numero += 1
                }
                break
        }
    }
    return numero
}
module.exports = {
    'deRomanoADecimal': deRomanoADecimal
}