(() => {

interface IMotor {

    start();
    stop();
}
class MotorCombustion implements IMotor {
    marca: string;
    modelo: string;
    año: number;
    tipocombustible: string;
    constructor(m: string, mod: string, a: number, c: string) {
        this.marca = m;
        this.modelo = mod;
        this.año = a;
        this.tipocombustible = c;
    };
    start() {
        console.log("arranca el motor", this.marca, ' ', this.modelo, ' ',
            this.año);
    };
    stop() {
        console.log("para el motor", this.marca, ' ', this.modelo, ' ', this.año);
    };
}

class MotorElectrico implements IMotor {
    marca: string;
    modelo: string;
    año: number;
    numerobaterias: number;
    constructor(m: string, mod: string, a: number, b: number) {
        this.marca = m;
        this.modelo = mod;
        this.año = a;
        this.numerobaterias = b;
    };
    start() {
        console.log("arranca el motor electrico", this.marca, ' ', this.modelo, ' ', this.año);
    };
    stop() {
        console.log("para el motor electrico", this.marca, ' ', this.modelo, ' ', this.año);
    };
}
let mimotor = new MotorCombustion('mercedes', 's30', 1995, 'diesel');
mimotor.start();
mimotor.stop();
let tumotor = new MotorElectrico('tesla', 'model 3', 2019, 25);
tumotor.start();
tumotor.stop();

})()