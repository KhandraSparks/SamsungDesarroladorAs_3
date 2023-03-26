(() => {

export class miClase{
        
    //Código de la clase
}

export function miFunction(nombre:string){
    console.log('Hola ${nombre}')
}

export var edad = 42;
export var activo = 0;

//Si quiero importar varios elementos tengo que hacer un import por elemento.

import { miClase} from './miArchivo';


//Podemos llamar a varios elementos en un solo import:

import { miClase, miFuncion, miVariable} from './miArchivo';

//También podemos importar todo lo “importable” de un archivo y hacer uso de los alias:

import * as miAlias from './miArchivo';


})()