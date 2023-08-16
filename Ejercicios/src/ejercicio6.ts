/* Construir el algoritmo en Typescript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

import * as readlineSync from 'readline-sync';

interface Estudiante {
    nombre: string;
    sexo: string ;
    nota: number;
  }
  
  function informacion(cantidadEstudiantes: number): Estudiante[] {
    let estudiantes: Estudiante[] = [];
    for (let i = 0; i < cantidadEstudiantes; i++) {
    let nombreEstudiante = readlineSync.question(`Ingrese el nombre del estudiante ${i + 1}:`);
    let sexoEstudiante = readlineSync.question('Ingrese el sexo del estudiante (M o F): ');
    let notaEstudiante = parseFloat(readlineSync.question('Ingrese la nota definitiva del estudiante: '));
  
    sexoEstudiante.toUpperCase;

    let estudiante: Estudiante = {
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

    estudiantes.forEach((element,index) => {
      console.log(index,element);
  
      if (element.sexo === "M") {
          masculino++;
      }

      if (element.sexo === "F") {
        femenino++;
    }
    
  });

  console.log(`El estudiante con mayor nota es ${estudiantes[0]} y el estudiante con menor nota es ${estudiantes[estudiantes.length-1]}`)
  console.log(`Numero de feminas es ${femenino} y numero de masculinos ${masculino}`)
  }
  
  main5();