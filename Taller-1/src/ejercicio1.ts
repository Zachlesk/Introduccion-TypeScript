/* Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"  */

import readlineSync from 'readline-sync';

function main1(){
    let nombre = readlineSync.question('¡Hola! Digita el nombre del alumno');

    let nota1 = parseFloat(readlineSync.question('Introduce la primera nota del alumno: '));
    let nota2 = parseFloat(readlineSync.question('Introduce la segundo nota del alumno: '));
    let nota3 = parseFloat(readlineSync.question('Introduce la tercera nota del alumno: '));

    let promedio = nota1 +  nota2 + nota3 / 3 ;

    console.log(`El promedio del alumno ${nombre} es ${promedio} `)
}

main1();