"use strict";
class Astronauta {
    /* public id: number;
    public nombre: string;
    public record: string; */
    constructor(id, nombre, _meta, _record) {
        this.id = id;
        this.nombre = nombre;
        this._meta = _meta;
        this._record = _record;
        /* this.id = id;
        this.nombre = nombre;
        this.record = record; */
    }
    obtenerRecompensa(record) {
        if (astro1.record == "Artemis") {
            this.meta = "Premio 500 millones";
            return this.meta;
        }
        else {
            console.log("Any");
        }
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
    set meta(meta) {
        this._meta = meta;
    }
    get meta() {
        return this._meta;
    }
}
// Via constructor 
const astro1 = new Astronauta(1, "Kas", "Sol", "Andromeda");
console.log(`Record ${astro1.record}`);
console.log(astro1.nombre);
// Via setter
astro1.record = "Sol";
console.log(`Record via setter: ${astro1.record}`);
astro1.obtenerRecompensa("Artemis");
