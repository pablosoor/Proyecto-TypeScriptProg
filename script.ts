// DATOS PRIMITIVOS

let estudiasteJavascript: boolean = true

if(estudiasteJavascript){
    console.log("Has estudiado Javascript")
}else{
    console.log("No has estudiado Javascript")
}

let interMiami: number = 11
let dcDallas: number = 11
let messi: number = 1
let jugaMessi: boolean = true

function jugar(equipo1: number, equipo2: number, jugaMessi: boolean): void{
    let motivo:string = ""
    if(jugaMessi) {
        equipo1 += messi
        motivo = " porque juega Messi"
    }
    if(equipo1 > equipo2) console.log(`Gana inter miami${motivo}`)
    if(equipo2 > equipo1) console.log("Empate")
    if(equipo1 == equipo2) console.log("Gana inter miami")
}
jugar(interMiami, dcDallas, jugaMessi)



// ANY

let disney: any

disney = "Disney"
console.log(disney)

disney = 1233333
console.log(disney)

disney = false
console.log(disney)

// ARRAYS

let arreglo: number [] = [1,2,3,4,5,6,7]

let arregloTexto: string [] = ["1","2","3","4","5","6","7"]

arregloTexto[0].indexOf("1")



// OBJETOS LITERALES

// type personalizado
type Programador = {
    nombre: string,
    edad: number,
    profesion: string,
    tomaMate?: boolean | null
}

let programador: Programador = {
    nombre: "Andres",
    edad: 30,
    profesion: "Desarrollador web",
    tomaMate: true
}

let programado2: Programador = {
    nombre: "Pablo",
    edad: 18,
    profesion: "Desarrollador web",
}


// INTERFACE 

interface ProgramadorInterface{
    nombre: string,
    edad: number,
    profesion: string,
    tomaMate?: boolean | null
}


let dev1: ProgramadorInterface = {
    nombre: "Andres",
    edad: 30,
    profesion: "Desarrollador web",
    tomaMate: true
}

let dev2: ProgramadorInterface = {
    nombre: "Pablo",
    edad: 18,
    profesion: "Desarrollador web",
}

function enviarCurriculum(programador : ProgramadorInterface){
    console.log(`El curriculum de ${programador.nombre} ha sido enviado`)
}

enviarCurriculum(dev1)


// CLASES Y POO

class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula "${this.nombre}" se proyecta en cine`)
    }

    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}

const pelicula = new Pelicula("Nombre Pelicula", ["protagonista 1", "protagonista 2"], ["actor 1", "actor 2"])

console.log(pelicula)

// Encapsulamiento y genéricos

class Sorteo<T> {
    private ticket?: T;
    
    constructor(
        private nombre: string
    ) { }

    setTicket(ticket: T) {
        this.ticket = ticket;
    }

    getTicket() {
        return this.ticket;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}

let sorteo1 = new Sorteo<number>("Pablo Osorio");
sorteo1.setTicket(7);
console.log(sorteo1.sortear());

let sorteo2 = new Sorteo<string>("Pablo Osorio");
sorteo2.setTicket("7");
console.log(sorteo2.sortear());





