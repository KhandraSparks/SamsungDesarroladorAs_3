import { consts } from "./Consts";

class Telefono{

//Constructor:
    constructor(
        private _tipo: string,
        private _numero: number
    ) {}

// Getters & Setters:
    public get numero(): number {
    return this._numero;
    }   
    public set numero(newNumero: number) {
    this._numero = newNumero;
    }

    public get tipo(): string {
    return this._tipo;
    }
    public set tipo(newTipo: string) {
    this._tipo = newTipo;
    }

// Methods
    toString(): string {
        return "\n" +consts.indent+consts.wtbullet+ "Tipo: "+this.tipo+ 
                "\n" +consts.indent2+ "Número: "+this.numero;
    }
};

//Export Class:
export { Telefono };