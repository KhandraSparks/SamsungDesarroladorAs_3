(() => {


//Declaración del ENUM

enum granja { vaca = 3, caballo = 1, cerdo = 2, gallina = 5, pato }
// En realidad le estamos pasando:
// enum granja { undefined, caballo, cerdo, vaca, undefined, gallina, pato }

let a: granja = granja.cerdo;

console.log(granja[3]);             // vaca
console.log(granja[4]);             // undefined
console.log(granja[6]);             // pato
console.log(granja.caballo);        //1 


})()