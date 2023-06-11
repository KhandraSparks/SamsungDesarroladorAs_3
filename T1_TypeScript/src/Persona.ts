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
        private _cumple: Date,
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

    public get cumple(): Date {
        return this._cumple;
    }
    public set cumple(newCumple:Date){
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
        this._telefonos = newTelefonos;
    }

    public get notas(): string {
        return this._notas;
    }
    public set notas(newNotas:string) {
        this._notas = newNotas;
    }

// Methods:
    //New dirección and append to end of array
    addDireccion(direccionToAdd:Direccion) {
        this.direcciones.push(direccionToAdd);
    }
    //New mail and append to end of array
    addMail(mailToAdd:Mail) {
        this.mails.push(mailToAdd);
    }
    //New telefono and append to end of array
    addTelefono(telefonoToAdd:Telefono) {
        this.telefonos.push(telefonoToAdd);
    }
    //Calculate edad:
    calculateEdad(){
        return Math.floor((new Date().getTime() - new Date(this.cumple).getTime()) / 3.15576e+10);
    }
};

//Export Class:
export { Persona };