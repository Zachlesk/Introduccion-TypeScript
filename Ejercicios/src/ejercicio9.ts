// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

import * as readlineSync from 'readline-sync';

interface Atleta {
  nombre: string;
  marca: number;
}

function descripcion(numAtletas: number): Atleta[] {
  let atletas: Atleta[] = [];
  for (let i = 0; i < numAtletas; i++) {
    let nombreAtleta = readlineSync.question(`Ingrese el nombre del atleta finalista: ${i + 1}`);
    let marca = parseFloat(readlineSync.question(`Ingrese la marca del salto en metros de el atleta ${nombreAtleta}: `));

    let atleta: Atleta = {
      nombre: nombreAtleta,
      marca: marca
    };

    atletas.push(atleta);
  }

  return atletas;
}


function main9() {
  let numAtletas = parseInt(readlineSync.question('Ingrese el número de atletas finalistas: '));

  let atletas = descripcion(numAtletas);

  atletas.sort((a, b) => b.marca - a.marca);

  let campeona = atletas[0];

  console.log(`La atleta campeona es ${campeona.nombre} con una marca de ${campeona.marca} metros`);

  if (campeona.marca > 15.50) {
    console.log('¡Rompio el record y es el ganador de 500 millones! Aprovechalos');
  }

  if (atletas.length >= 2) {
    let medallaPlata = atletas[1];
    console.log(`La atleta con medalla de plata es ${medallaPlata.nombre} con una marca de ${medallaPlata.marca} metros.`);
  }

  if (atletas.length >= 3) {
    let medallaBronce = atletas[2];
    console.log(`La atleta con medalla de bronce es ${medallaBronce.nombre} con una marca de ${medallaBronce.marca} metros`);
  }

  console.log('Ranking/Top de todas las atletas:');
  for (let i = 0; i < atletas.length; i++) {
    console.log(`${i + 1}. ${atletas[i].nombre} - ${atletas[i].marca} metros`);
  }
}

main9();