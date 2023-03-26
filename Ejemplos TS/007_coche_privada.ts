(() => {

//Declaración e instanciación de una clase 
class Coche {
    private marca: string;
    private modelo: string;
    private ancho: number;
    private largo: number;
    private peso: number;
    private color: string;
    private park_assistan: boolean;

    // Constructor
    constructor(a: string, b: string, c:number, d:string, e:boolean) {
        this.marca = a;
        this.modelo = b;
        this.ancho = 120;
        this.largo = 380;
        this.peso = c;
        this.color = d;
        this.park_assistan = e;
    }

    //Getters y Setters
    public getMarca(): string {
        
        if (this.marca != "Seat" && this.marca != "Audi" && this.marca != "Volkswagen"){
            console.log ("Error al elegir coche");
        }else {
            return this.marca;
        }
    }

    public setMarca(marca: string): void {
        this.marca = marca;

    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAncho(): number {
        return this.ancho;
    }

    public setAncho(ancho: number): void {
        this.ancho = ancho;
    }

    public getLargo(): number {
        return this.largo;
    }

    public setLargo(largo: number): void {
        this.largo = largo + 20;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = peso;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isPark_assistan(): boolean {
        return this.park_assistan;
    }

    public setPark_assistan(park_assistan: boolean): void {
        this.park_assistan = park_assistan;
    }

}



//Instancia de Coche. Seat León
var seatLeon = new Coche("Sat", "Leon", 950, "Rojo", true);

console.log("Marca: " + seatLeon.getMarca());
console.log("Modelo: " + seatLeon.getModelo());
console.log("Ancho: " + seatLeon.getAncho());
console.log("Largo: " + seatLeon.getLargo());
console.log("Peso: " + seatLeon.getPeso());
console.log("Color: " + seatLeon.getColor());
console.log("Park_assistan: " + seatLeon.isPark_assistan());

//Instancia de Coche. Audi A3
var audiA3 = new Coche("Audi", "A3", 1050, "azul", false);

console.log("Marca: " + audiA3.getMarca());
console.log("Modelo: " + audiA3.getModelo());
console.log("Ancho: " + audiA3.getAncho());
console.log("Largo: " + audiA3.getLargo());
console.log("Peso: " + audiA3.getPeso());
console.log("Color: " + audiA3.getColor());
console.log("Park_assistan: " + audiA3.isPark_assistan());

//Instancia de Coche. Volkswagen Golf
var volkswagenGolf = new Coche("Volkswagen", "Golf", 985, "Plata", true);

console.log("Marca: " + volkswagenGolf.getMarca());
console.log("Modelo: " + volkswagenGolf.getModelo());
console.log("Ancho: " + volkswagenGolf.getAncho());
console.log("Largo: " + volkswagenGolf.getLargo());
console.log("Peso: " + volkswagenGolf.getPeso());
console.log("Color: " + volkswagenGolf.getColor());
console.log("Park_assistan: " + volkswagenGolf.isPark_assistan());

})()