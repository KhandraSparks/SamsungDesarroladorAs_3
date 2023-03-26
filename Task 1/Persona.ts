class Persona{
    constructor(
        public nombre: string,
        public apellidos: string,
        public edad: number,
        public dni: string,
        public cumple: string,
        public colorFavorito: string,
        public sexo: string,
        public direcciones: Direccion[], 
        public mails: Mail[],
        public telefonos: Telefono[],
        public notas: string,
    ){}
};