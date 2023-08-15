"use strict";
/* Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"  */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function main1() {
    let nombre = readline_sync_1.default.question('¡Hola! Digita el nombre del alumno');
    let nota1 = parseFloat(readline_sync_1.default.question('Introduce la primera nota del alumno: '));
    let nota2 = parseFloat(readline_sync_1.default.question('Introduce la segundo nota del alumno: '));
    let nota3 = parseFloat(readline_sync_1.default.question('Introduce la tercera nota del alumno: '));
    let promedio = nota1 + nota2 + nota3 / 3;
    console.log(`El promedio del alumno ${nombre} es ${promedio} `);
}
main1();
