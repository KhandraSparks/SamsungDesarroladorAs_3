import { consts } from "./Consts";

class Mail {

//Constructor:
    constructor(
        private _tipo: string, 
        private _direccion: string
        ) {}

//Getters & Setters:
    public get tipo(): string {
        return this._tipo;
    }
    public set tipo(newTipo: string) {
        this._tipo = newTipo;
    }

    public get direccion(): string {
        return this._direccion;
    }
    public set direccion(newDireccion: string) {
        this._direccion = newDireccion;
    }

// Methods
    toString(): string {
        return "\n" +consts.indent+consts.wtbullet+"Tipo: "+this.tipo+ 
                "\n" +consts.indent2+ "Dirección: "+this.direccion;
    }
};

//Export Class:
export { Mail };