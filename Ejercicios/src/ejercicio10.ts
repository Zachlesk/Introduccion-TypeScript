// 10. Desarrolle un programa cíclico que capture un dato
// numérico cada vez, y los vaya acumulando. El programa se
// detiene cuando el usuario digita un cero. El programa debe
// mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
// PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
// VALOR Y MENOR VALOR.

import * as readlineSync from 'readline-sync';

function main10() {
  let valores: number[] = [];
  let suma = 0;

  while (true) {
    let valor = parseFloat(readlineSync.question('Ingrese un valor numerico: '));

    if (valor === 0) {
      break;
    }

    valores.push(valor);
    suma += valor;
  }

  let cantidadValores = valores.length;
  let promedio = suma / cantidadValores;
  let mayorValor = Math.max(...valores);
  let menorValor = Math.min(...valores);

  valores.sort((a, b) => a - b);

  console.log('Valores ingresados en orden ascendente:');

  for (let valor of valores) {
    console.log(valor);
  }

  console.log(`La sumatoria es: ${suma}`);
  console.log(`El promedio es: ${promedio}`);
  console.log(`Cantidad de numeros digitados: ${cantidadValores}`);
  console.log(`Mayor : ${mayorValor}`);
  console.log(`Menor : ${menorValor}`);
}

main10();