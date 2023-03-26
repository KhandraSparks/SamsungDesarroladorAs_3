(() => {

    class Hommer {
        constructor(
            public nombre: string,
            public apellido: string
        ) {
            console.log(`${this.nombre} ${this.apellido}`)
        }
    }

    class Bart extends Hommer { };

        const miPersonaje = new Bart("Bart", "Simpson")
    
    console.log(miPersonaje);

    }) ()