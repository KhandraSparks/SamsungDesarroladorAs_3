//Import necessary classes, etc.:
import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Persona } from "./Persona";
import { Telefono } from "./Telefono";
import { consts } from "./Consts";


//Create 3 Persona:
    let p1: Persona;
    let p2: Persona;
    let p3: Persona;
    p1= new Persona("Mia","Rodriguez Lopez",-1,"63895358F",new Date("2003-1-1"),"Azul","Mujer",[new Direccion("C/ Anchieta",27,1,"C",38205,"La Laguna","SC Tenerife")],[new Mail("Personal","miarl@randomemail.com")],[new Telefono("Personal", 658989657), new Telefono("Trabajo", 666895784)],"La hija de la vecina");
    p2 = new Persona("Ana","Alvarez Perez",-1,"43699378D",new Date(1995,12,8),"Verde","Mujer",[new Direccion("C/ Bentinerfe",20,1,"A",38670,"Adeje","SC Tenerife")],[new Mail("Personal", "anabanana@internetiskewl.dawg")],[new Telefono("Personal", 647758563)],"No le gustan los perros, es alérgica");
    p3 = new Persona("Jose","Perez Gonzalez",-1,"79497358M",new Date(1965,6,30),"Rojo","Hombre",[new Direccion("Plaza Europa",20,1,"",38400,"Puerto de la Cruz","SC Tenerife")],[new Mail("Trabajo","joseperezglez@seriouscompanydomain.com")],[new Telefono("Trabajo", 647758563)],"El señor del bigote estilo Dalí");
    let personas: Persona[] = [p1, p2, p3];
    //Calculate their age based on birthday
    personas.forEach(p => {
            p.edad= p.calculateEdad(); 
        });

//Show the original data through console.log():
    console.log("\n ========================REGISTROS ORIGINALES========================");
    printPersonas(personas);

//Finding the specific P through dni value:
    console.log("\n ========================MODIFICANDO REGISTROS========================");
    // DNI to search for:
    let findDNI:string = "43699378D";
    let foundPersona = searchPersonaByDNI(findDNI)

//New data to input into records
    let nuevaDireccion:Direccion = new Direccion("C/ Hermandad",35,1,"",38108,"La Laguna","S/C Tenerife");
    let nuevoEmail:Mail = new Mail("Trabajo","veryprofessionalemail@somecompany.com");
    let nuevoTelefono:Telefono = new Telefono("Trabajo", 658921473);
    let nuevosDatos:any[] = [nuevaDireccion,nuevoEmail,nuevoTelefono];

//Adding new direccion, mail, telefono if valid persona was found:
    if (foundPersona!=null) {
        addRecords(foundPersona, nuevosDatos);
    }

// Show the 3 Persona with the changes made:
    console.log("\n ========================REGISTROS MODIFICADOS========================");
    printPersonas(personas);



// FUNCTIONS:

//Formats and prints to console:
function printPersonas(personas:Persona[]) {
    personas.forEach(persona => {
        console.log("\n-------- Persona "+(personas.indexOf(persona)+1)+" --------");
        Object.keys(persona).forEach(key =>{
            if (key==="_cumple") {
                console.log(consts.bullet+ key.substring(1,2).toUpperCase()+key.substring(2)+": " + persona.cumple.toLocaleDateString());
            } else {
                console.log(consts.bullet+ key.substring(1,2).toUpperCase()+key.substring(2)+": " + persona[key as (keyof typeof persona)].toString());
            }
        });
    });
}

// Searches persona by DNI:
function searchPersonaByDNI(findDNI:string) {
    console.log("\nBuscando persona con dni " + findDNI);
    let result = personas.find(element => element.dni === findDNI);
    if (result == undefined)
    {
        console.log("No hay registros con ese DNI");
        return null
    }
    else
    {
        console.log("El dni " + findDNI + " corresponde a " + result.nombre + " " + result.apellidos);
        return result;
    }
}


// Adds records to persona in appropriate property
function addRecords(personaToModify:Persona,newRecords:any[]){
    newRecords.forEach((newRecord) => {
		switch (newRecord.constructor.name) {
			case "Mail":
				personaToModify.addMail(newRecord);
                console.log("Añadido nuevo mail a " + personaToModify.nombre+" "+personaToModify.apellidos);
				break;

			case "Direccion":
				personaToModify.addDireccion(newRecord);
                console.log("Añadida nueva dirección a " + personaToModify.nombre+" "+personaToModify.apellidos);
				break;

			case "Telefono":
				personaToModify.addTelefono(newRecord);
                console.log("Añadido nuevo teléfono a " + personaToModify.nombre+" "+personaToModify.apellidos);
				break;

			default:
				console.log("No se puede añadir, los datos no son del tipo correcto");
				break;
		}
	});
}