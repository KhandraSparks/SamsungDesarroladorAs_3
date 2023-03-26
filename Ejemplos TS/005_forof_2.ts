(()=>{

    type contacto = {
      nombre: string,
      telefono: number,
      email: string
  }
  
  const contacto1: contacto = {
      nombre: "Angel",
      telefono: 666666666,
      email: "angel@hotmail.com"
  }
  
  const contacto2: contacto = {
    nombre: "María",
    telefono: 666634566,
    email: "María@hotmail.com"
  }
  
  const contactos = [contacto1, contacto2]
  for (const iterator of contactos) {
      console.log(iterator.nombre, iterator.telefono);
  }
    
  
  
  })()