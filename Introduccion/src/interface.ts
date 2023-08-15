interface Song {
    id: number,
    nombre: string,
    year?: number
}

const iso:Song =  {
    id: 0,
    nombre: "My beloved"
}

const zachi:Song = {
    id: 1,
    nombre: "Nath Valentine",
    year: 2005
}

console.log(iso.nombre);
console.log(zachi.id);