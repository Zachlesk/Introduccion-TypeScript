"use strict";
// Objects arrays
let goleadores = ['Zachi', 'Iso', 'Jett'];
let goles = [0, 5, -2];
let corners = [];
console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goles}`);
// Método alternativo para definir arrays en TS
let penalties = [false];
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
};
console.log(songs);
const object = {
    id: 7,
    nombre: 'Sol',
    edad: 1000
};
// object.id = 9;
console.log(object);
