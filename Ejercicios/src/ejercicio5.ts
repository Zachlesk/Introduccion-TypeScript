// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

import * as readlineSync from 'readline-sync'

function main5() {
  let numero1 = parseFloat(readlineSync.question('Introduce el primer numero: '));
  let numero2 = parseFloat(readlineSync.question('Introduce el segundo numero: '));

    if (numero1 > numero2) {
      let suma = numero1 + numero2;
      let diferencia = numero1 - numero2;

      console.log(`La suma de los números digitados es: ${suma}`);
      console.log(`La diferencia de los números digitados es: ${diferencia}`);

    } else {
      let producto =  numero1 * numero2;
      let division = numero1 / numero2;

      console.log(`El producto de los números digitados es: ${producto}`);
      console.log(`La división de los números digitados es: ${division}`);
    }
  
  }

main5();