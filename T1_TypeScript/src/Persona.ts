//Import necessary classes:
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

//Define class:
class Persona{

//Constructor:
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _edad: number,
        private _dni: string,
        private _cumple: string,
        private _colorFavorito: string,
        private _sexo: string,
        private _direcciones: Direccion[], 
        private _mails: Mail[],
        private _telefonos: Telefono[],
        private _notas: string,
    ){}

//Getters & Setters:
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(newNombre:string){
        this._nombre = newNombre;
    }

    public get apellidos(): string {
        return this._apellidos;
    }
    public set apellidos(newApellidos:string){
        this._apellidos = newApellidos;
    }

    public get edad(): number{
        return this._edad;
    }
    public set edad(newEdad:number) {
        this._edad = newEdad;
    }

    public get dni(): string {
        return this._dni;
    }
    public set dni(newDni:string) {
        this._dni = newDni;
    }

    public get cumple(): string {
        return this._cumple;
    }
    public set cumple(newCumple:string){
        this._cumple = newCumple;
    }

    public get colorFavorito(): string {
        return this._colorFavorito;
    }
    public set colorFavorito(newColorFavorito:string){
        this._colorFavorito = newColorFavorito;
    }

    public get sexo(): string {
        return this._sexo;
    }
    public set sexo(newSexo:string) {
        this._sexo = newSexo;
    }

    public get direcciones(): Direccion[] {
        return this._direcciones;
    }
    public set direcciones(newDirecciones: Direccion[]){
        this._direcciones = newDirecciones ;
    }

    public get mails(): Mail[] {
        return this._mails;
    }
    public set mails(newMails: Mail[]){
        this._mails = newMails ;
    }

    public get telefonos(): Telefono[] {
        return this._telefonos;
    }
    public set telefonos(newTelefonos: Telefono[]){
        this._telefonos = newTelefonos ;
    }

    public get notas(): string {
        return this._notas;
    }
    public set notas(newNotas:string) {
        this._notas = newNotas;
    }

// Methods:
    //New dirección and append to end of array
    // make setter replace the whole array, then make a function that takes current array, adds new direccion, then sets the array to the new one?
    addDireccion(this:Persona, direccionToAdd:Direccion) {
        direccionToAdd = new Direccion("C/ La Marina", 20,1,"Sin Letra",38001,"Santa Cruz de Tenerife", "SC Tenerife");
        this._direcciones.push(direccionToAdd);
    }
    //New mail and append to end of array
    //New telefono and append to end of array
};

//Export Class:
export { Persona };