import { consts } from "./Consts";

class Direccion {
	//Constructor:
	constructor(
		private _calle: string,
		private _numero: number,
		private _piso: number,
		private _letra: string,
		private _codigoPostal: number,
		private _poblacion: string,
		private _provincia: string
	) {}

	// Getters & Setters:
	public get calle(): string {
		return this._calle;
	}
	public set calle(newCalle: string) {
		this._calle = newCalle;
	}

	public get numero(): number {
		return this._numero;
	}
	public set numero(newNumero: number) {
		this._numero = newNumero;
	}

	public get piso(): number {
		return this._piso;
	}
	public set piso(newPiso: number) {
		this._piso = newPiso;
	}

	public get letra(): string {
		return this._letra;
	}
	public set letra(newLetra: string) {
		this._letra = newLetra;
	}

	public get codigoPostal(): number {
		return this._codigoPostal;
	}
	public set codigoPostal(newCodigoPostal: number) {
		this._codigoPostal = newCodigoPostal;
	}

	public get poblacion(): string {
		return this._poblacion;
	}
	public set poblacion(newPoblacion: string) {
		this._poblacion = newPoblacion;
	}

	public get provincia(): string {
		return this._provincia;
	}
	public set provincia(newProvincia: string) {
		this._provincia = newProvincia;
	}

	//Methods:
	toString(): string {
        return "\n" + consts.indent + consts.wtbullet + this.calle+ ", " +this.numero+ ", " +this.piso+ consts.deg +this.letra+ 
				"\n" + consts.indent2 + this.codigoPostal+", " +this.poblacion+ ", " +this.provincia;
    }
}

//Export Class:
export { Direccion };