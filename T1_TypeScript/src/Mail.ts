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
};

//Export Class:
export { Mail };