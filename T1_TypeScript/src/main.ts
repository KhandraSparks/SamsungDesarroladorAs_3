//Import necessary classes:
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";

//Create 3 Persona:
let p1 = new Persona("Mia","Rodriguez Lopez",30,"63895358F","01/01","Azul","Mujer",[new Direccion("C/ Anchieta",27,1,"C",38205,"La Laguna","SC Tenerife")],[new Mail("Personal","miarl@randomemail.com")],[new Telefono("Personal", 658989657)],"La hija de la vecina");
let p2 = new Persona("Ana","Alvarez Perez",47,"43699378D","08/12","Verde","Mujer",[new Direccion("C/ Bentinerfe",20,1,"A",38670,"Adeje","SC Tenerife")],[new Mail("Personal", "anabanana@internetiskewl.dawg")],[new Telefono("Personal", 647758563)],"No le gustan los perros, es alérgica");
let p3 = new Persona("Jose","Perez Gonzalez",65,"79497358M","30/06","Rojo","Hombre",[new Direccion("Plaza Europa",20,1,"-",38400,"Puerto de la Cruz","SC Tenerife")],[new Mail("Trabajo","joseperezglez@seriouscompanydomain.com")],[new Telefono("Trabajo", 647758563)],"El señor del bigote estilo Dalí");
//Show the original data through console.log():
let personas = [p1, p2, p3];
console.log(personas);
// TODO: For now it prints direccion,etc as just a name

//Finding the specific P through dni value:
// DNI to search for:
let findDni: string;
findDni = "43699378D";
console.log("Buscando persona con dni " + findDni);
let result = personas.find(element => element.dni === findDni);
if (result == undefined)
{
    console.log("No hay registros con ese DNI");
}
else
{
    console.log("El dni " + findDni + " corresponde a " + result.nombre + " " + result.apellidos);
}

//Adding new direccion, mail, telefono:
//result.direcciones.push
// console.log("Añadida nueva dirección aa " + searchResult);
// console.log("Añadido nuevo mail a " + searchResult);
// console.log("Añadido nuevo teléfono a " + searchResult);

// Show the 3 Persona with the changes made:
// console.log(p1, p2, p3);