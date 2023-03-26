var miVariable = (dato1:string, ...restArgumentos:string[]):string => {
    return `${dato1} ${restArgumentos.join(" ")}`;
    }
    
    console.log(miVariable("Angel", "fas", "fgskjs", "fafhalfhdl"));