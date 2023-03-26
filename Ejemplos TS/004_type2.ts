(()=>{

type villano = {
    nombre:string,
    edad: number | undefined,
    mutante:boolean
  }
  
  const arrayVillanos: villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];

})()