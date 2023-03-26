(() => {

abstract class Ficha {
    abstract nombre: string;
    mostrarNombre(): void {
        console.log(this.nombre);
    }
}

class Alumno extends Ficha {
    nombre: string;
    edad: number;
    constructor(a: string, b: number) {
        super();
        this.nombre = a;
        this.edad = b;
    }
}

let a: Ficha = new Alumno("Juan", 17);
a.mostrarNombre(); //Juan

})()