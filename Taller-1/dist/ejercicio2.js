"use strict";
/* Dado un número indicar si es par o impar y si es mayor de 10 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function main2() {
    let numero = parseFloat(readline_sync_1.default.question('Ingrese el número a valorar '));
    if (numero % 2) {
        console.log('Su número es impar');
    }
    else {
        console.log('Su número es par');
    }
    if (numero > 10) {
        console.log('Su número es mayor a 10');
    }
}
