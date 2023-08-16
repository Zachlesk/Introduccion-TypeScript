"use strict";
/* Construir el algoritmo en Typescript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */
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
function informacion(cantidadEstudiantes) {
    let estudiantes = [];
    for (let i = 0; i < cantidadEstudiantes; i++) {
        let nombreEstudiante = readlineSync.question(`Ingrese el nombre del estudiante ${i + 1}:`);
        let sexoEstudiante = readlineSync.question('Ingrese el sexo del estudiante (M o F): ');
        let notaEstudiante = parseFloat(readlineSync.question('Ingrese la nota definitiva del estudiante: '));
        sexoEstudiante.toUpperCase;
        let estudiante = {
            nombre: nombreEstudiante,
            sexo: sexoEstudiante,
            nota: notaEstudiante
        };
        estudiantes.push(estudiante);
    }
    return estudiantes;
}
function main5() {
    let cantidadEstudiantes = parseInt(readlineSync.question('Ingrese el número de estudiantes: '));
    let estudiantes = informacion(cantidadEstudiantes);
    estudiantes.sort((a, b) => b.nota - a.nota);
    let masculino = 0;
    let femenino = 0;
    estudiantes.forEach((element, index) => {
        console.log(index, element);
        if (element.sexo === "M") {
            masculino++;
        }
        if (element.sexo === "F") {
            femenino++;
        }
    });
    console.log(`El estudiante con mayor nota es ${estudiantes[0]} y el estudiante con menor nota es ${estudiantes[estudiantes.length - 1]}`);
    console.log(`Numero de feminas es ${femenino} y numero de masculinos ${masculino}`);
}
main5();
