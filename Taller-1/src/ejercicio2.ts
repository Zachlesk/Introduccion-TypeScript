 /* Dado un número indicar si es par o impar y si es mayor de 10 */

import readlineSync from 'readline-sync';

function main2() {
    let numero = parseFloat(readlineSync.question('Ingrese el número a valorar '));

    if (numero % 2){
        console.log('Su número es impar');
    }
    else {
        console.log('Su número es par');
    }

    if (numero > 10){
        console.log('Su número es mayor a 10')
    }
}