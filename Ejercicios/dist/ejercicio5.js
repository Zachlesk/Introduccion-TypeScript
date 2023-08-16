"use strict";
// Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function main5() {
    let numero1 = parseFloat(readlineSync.question('Introduce el primer numero: '));
    let numero2 = parseFloat(readlineSync.question('Introduce el segundo numero: '));
    if (numero1 > numero2) {
        let suma = numero1 + numero2;
        let diferencia = numero1 - numero2;
        console.log(`La suma de los números digitados es: ${suma}`);
        console.log(`La diferencia de los números digitados es: ${diferencia}`);
    }
    else {
        let producto = numero1 * numero2;
        let division = numero1 / numero2;
        console.log(`El producto de los números digitados es: ${producto}`);
        console.log(`La división de los números digitados es: ${division}`);
    }
}
main5();
