(() => {

//Declaración e instanciación de una clase pública
class Coche {
    marca: string;
    modelo: string;
    ancho: number;
    largo: number;
    peso: number;
    color: string;
    park_assistan: boolean;

    constructor(a: string, b: string, c:number, d:string, e:boolean) {
        this.marca = a;
        this.modelo = b;
        this.ancho = 120;
        this.largo = 380;
        this.peso = c;
        this.color = d;
        this.park_assistan = e;
    }
}

//Instancia de Coche. Seat León
var seatLeon = new Coche("Seat", "Leon", 950, "Rojo", true);

console.log("Marca: " + seatLeon.marca);
console.log("Modelo: " + seatLeon.modelo);
console.log("Ancho: " + seatLeon.ancho);
console.log("Largo: " + seatLeon.largo);
console.log("Peso: " + seatLeon.peso);
console.log("Color: " + seatLeon.color);
console.log("Park_assistan: " + seatLeon.park_assistan);


//Instancia de Coche. Audi A3
var audiA3 = new Coche("Audi", "A3", 1050, "azul", false);

console.log("Marca: " + audiA3.marca);
console.log("Modelo: " + audiA3.modelo);
console.log("Ancho: " + audiA3.ancho);
console.log("Largo: " + audiA3.largo);
console.log("Peso: " + audiA3.peso);
console.log("Color: " + audiA3.color);
console.log("Park_assistan: " + audiA3.park_assistan);

//Instancia de Coche. Volkswagen Golf
var volkswagenGolf = new Coche("Volkswagen", "Golf", 985, "Plata", true);

console.log("Marca: " + volkswagenGolf.marca);
console.log("Modelo: " + volkswagenGolf.modelo);
console.log("Ancho: " + volkswagenGolf.ancho);
console.log("Largo: " + volkswagenGolf.largo);
console.log("Peso: " + volkswagenGolf.peso);
console.log("Color: " + volkswagenGolf.color);
console.log("Park_assistan: " + volkswagenGolf.park_assistan);

})()