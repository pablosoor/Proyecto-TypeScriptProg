"use strict";
// DATOS PRIMITIVOS
let estudiasteJavascript = true;
if (estudiasteJavascript) {
    console.log("Has estudiado Javascript");
}
else {
    console.log("No has estudiado Javascript");
}
let interMiami = 11;
let dcDallas = 11;
let messi = 1;
let jugaMessi = true;
function jugar(equipo1, equipo2, jugaMessi) {
    let motivo = "";
    if (jugaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi";
    }
    if (equipo1 > equipo2)
        console.log(`Gana inter miami${motivo}`);
    if (equipo2 > equipo1)
        console.log("Empate");
    if (equipo1 == equipo2)
        console.log("Gana inter miami");
}
jugar(interMiami, dcDallas, jugaMessi);
// ANY
let disney;
disney = "Disney";
console.log(disney);
disney = 1233333;
console.log(disney);
disney = false;
console.log(disney);
// ARRAYS
let arreglo = [1, 2, 3, 4, 5, 6, 7];
let arregloTexto = ["1", "2", "3", "4", "5", "6", "7"];
arregloTexto[0].indexOf("1");
let programador = {
    nombre: "Andres",
    edad: 30,
    profesion: "Desarrollador web",
    tomaMate: true
};
let programado2 = {
    nombre: "Pablo",
    edad: 18,
    profesion: "Desarrollador web",
};
let dev1 = {
    nombre: "Andres",
    edad: 30,
    profesion: "Desarrollador web",
    tomaMate: true
};
let dev2 = {
    nombre: "Pablo",
    edad: 18,
    profesion: "Desarrollador web",
};
function enviarCurriculum(programador) {
    console.log(`El curriculum de ${programador.nombre} ha sido enviado`);
}
enviarCurriculum(dev1);
// CLASES Y POO
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula "${this.nombre}" se proyecta en cine`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula("Nombre Pelicula", ["protagonista 1", "protagonista 2"], ["actor 1", "actor 2"]);
console.log(pelicula);
// Encapsulamiento y genéricos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    setTicket(ticket) {
        this.ticket = ticket;
    }
    
    getTicket() {
        return this.ticket;
    }
    
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo1 = new Sorteo("Pablo Osorio");
sorteo1.setTicket(7);
console.log(sorteo1.sortear());
let sorteo2 = new Sorteo("Pablo Osorio");
sorteo2.setTicket("7");
console.log(sorteo2.sortear());

