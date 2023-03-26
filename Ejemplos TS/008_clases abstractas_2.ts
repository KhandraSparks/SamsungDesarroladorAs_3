(() => {

abstract class Empleado {
    abstract nombre: string;
    abstract sueldo: number;
    abstract mostrarDatos(): void;
}

class Trabajador extends Empleado {
    nombre: string;
    sueldo: number;
    departamento: string;
    constructor(a: string, b: number, c: string) {
        super();
        this.nombre = a;
        this.sueldo = b;
        this.departamento = c;
    }

    mostrarDatos(): void {
        console.log("El empleado " + this.nombre + " del detartamento " + 
        this.departamento + " cobra " + this.sueldo + "€");
    }
}

class Jefe extends Empleado {
    nombre: string;
    sueldo: number;
    extra: number;
    constructor(a: string, b: number, c: number) {
        super();
        this.nombre = a;
        this.sueldo = b;
        this.extra = c;
    }

    mostrarDatos(): void {
        console.log("El jefe " + this.nombre + " cobra " + (this.sueldo + this.extra) + "€");
    }
}

let Homer: Trabajador = new Trabajador("Homer", 20000, "control");
Homer.mostrarDatos();

let MrBurns: Jefe = new Jefe ("Mr Burns ", 55000, 30000);
MrBurns.mostrarDatos();

/*Polimorfismo. Podemos instanciar una clase Trabajador como de tipo 
Empleado porque un trabajador SIEMPRE ES un empleado.*/

let Profesor_Frink: Empleado = new Trabajador ("Profesor Frink", 32000, "laboratorio");
Profesor_Frink.mostrarDatos();

})()