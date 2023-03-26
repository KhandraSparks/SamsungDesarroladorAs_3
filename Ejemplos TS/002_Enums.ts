(() => {

//Declaración del ENUM
enum granja { vaca, caballo, cerdo, gallina, pato }

let a: granja = granja.cerdo;       //2
console.log(granja[3]);             // gallina
console.log(granja.caballo);        //1

})()