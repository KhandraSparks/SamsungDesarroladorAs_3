(() => {

    class Hommer{
      constructor(
        public nombre:string,
        public apellido:string
      ){
        console.log(`${this.nombre} ${this.apellido}`)
      }
    }
    
    class Bart extends Hommer{
      constructor(name:string, apellido:string, isPelo:boolean){
        super(name, apellido);
    console.log(`${this.nombre} ${this.apellido} y tiene pelo: ${isPelo}`);
      }
    };
    
    const miPersonaje = new Bart("Bart", "Simpson", true)
    
    console.log(miPersonaje);
    
    })()