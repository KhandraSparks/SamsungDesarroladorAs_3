(() => {

//Uso de genéricos con any
//No tenemos control sobre los tipos de retorno

function miFuncion(arg: any): any {
    return arg;
}

//Con genéricos

function miFuncion2<Type>(arg: Type): Type {
    return arg;
}

let output = miFuncion<string>("myString");
//       ^ = let output: string

let output2 = miFuncion("myString");
//       ^ = let output: string

//Problemas con los que nos podemos encontrar
//La propiedad 'length' daría fallo si, por ejemplo, Type fuese de tipo number

function miFuncion3<Type>(arg: Type): Type {
    console.log(arg.length);
     return arg;
}

//La forma más lógica
function miFuncion4<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}

})()