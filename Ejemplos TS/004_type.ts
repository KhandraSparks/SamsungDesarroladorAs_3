(()=>{

    type cliente = {
      nombre:string,
      edad:number,
      clienteVIP:boolean,
      getName: ()=>string
    }
    
    let Antonio:cliente = {
      nombre:"Antonio",
      edad:45,
      clienteVIP:true,
      getName: ()=>{
        return Antonio.nombre;
      }
    }
    console.log(Antonio);
    console.log("El nombre del cliente es " + Antonio.getName());
    })()