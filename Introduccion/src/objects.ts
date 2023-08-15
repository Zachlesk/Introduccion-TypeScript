// Objects arrays
let goleadores:string[] = ['Zachi', 'Iso', 'Jett'];

let goles:number[] = [0, 5, -2];

let corners:number[] = [];

console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goles}`);

// Método alternativo para definir arrays en TS
let penalties:Array<boolean> = [false];

console.log(`Penalties: ${penalties}`);

// TS infiere los métodos aplicables según el tipo de dato
console.log(goles.map(ele => ele.toString()));

// Objects
let goleadoresId = [14, 12, 9, 11];
goleadoresId.push(4);
goleadoresId.push(+'22');

console.log(typeof goleadoresId);

const songs = {
    id: 1,
    nombre: 'Exceeding joy'
}

console.log(songs);

const object: {
    readonly id: number,
    nombre: string,
    edad: number,
    sueldo?: number
} = {
    id: 7,
    nombre: 'Sol',
    edad: 1000
}

// object.id = 9;

console.log(object);