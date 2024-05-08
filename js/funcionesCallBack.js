// Callback es una funccion que recibe como parametro otra funcion

/* function compra(articulo1, articulo2, funcion) {
  let gastado = articulo1 + articulo2;
  imprimir (gastado);
}

function imprimir (mensaje) {
    console.log(`Compramos leche y pan -gastamos, ${mensaje}`);
};

compra(65,70,imprimir); */

/* const arrayObjeto = (users) => {
    for (let i = 0; < users.length; i++) {
        console.log(`Nombre: ${users}[i].nombre, Trabaja: ${users}[i].trabaja ?`);
    }
};

const users = [
  {
    nombre: `Emmanuel`,
    apellido: `Canela`,
    edad: 26,
    trabaja: false,
    pareja: false,
    vehiculo: true,
    familia: true,
    banreservas: 9603523323,
    direccion: `Matanzas adentro, Barrio Con Ensalche las canas`,
    ciudad: `Santiago`,
    ocupacion: `Estudiante`,
  },
  {
    nombre: `Jaimito`,
    apellido: `Perez`,
    edad: 18,
    trabaja: true,
    pareja: true,
    vehiculo: false,
    familia: false,
    banreservas: 9823793723,
    direccion: `Pozo Prito Pimentel, Las palomas`,
    ciudad: `Santo Domingo`,
    ocupacion: `Electricista`,
  },
  {
    nombre: `Emmanuel`,
    apellido: `Canela`,
    edad: 26,
    trabaja: false,
    pareja: false,
    vehiculo: true,
    familia: true,
    banreservas: 7673672323,
    direccion: `Batman Vs, Superman , la vieja verde`,
    ciudad: `La Vega `,
    ocupacion: `Gerente`,
  },
];
 */
/* 
const arrayObjeto = (users) => {
  for (let i = 0; i < users.length; i++) {
    const nombre = users[i].nombre;
    const banreservas = users[i].banreservas;
    const edad = users[i].edad;

    console.log(`${nombre} ${banreservas} ${edad}`);
    ageVerifier()
  }
  
}; */

// -----------------------------------------***************---------------------------------------------
/* 
const ageVerifier = (edad, users) => {
  for (let b = 0; b < users.length; b++) {
    const users = users[b].edad;
    const nombre = users[b].nombre;

    if (edad < 17) {
      console.log(
        `$(nombre) debe ser mayor de edad para continuar, usted solo tiene ${edad}`
      );
    } else {
      conosle.log(`Bienvenido ${nombre}, usted tiene ${edad}`);
    }
  }
}; */

/* const users = [
  {
    nombre: `Emmanuel`,
    apellido: `Canela`,
    edad: 26,
    trabaja: false,
    vehiculo: true,
    familia: true,
    banreservas: 9603523323,
    direccion: `Matanzas adentro, Barrio Con Ensalche las canas`,
    ciudad: `Santiago`,
    ocupacion: `Estudiante`,
  },
  {
    nombre: `Jaimito`,
    apellido: `Perez`,
    edad: 18,
    trabaja: true,
    pareja: true,
    vehiculo: false,
    familia: false,
    banreservas: 9823793723,
    direccion: `Pozo Prito Pimentel, Las palomas`,
    ciudad: `Santo Domingo`,
    ocupacion: `Electricista`,
  },
  {
    nombre: `Carlos`,
    apellido: `Canela`,
    edad: 17,
    trabaja: false,
    pareja: false,
    vehiculo: true,
    familia: true,
    banreservas: 7673672323,
    direccion: `Batman Vs, Superman , la vieja verde`,
    ciudad: `La Vega `,
    ocupacion: `Gerente`,
  },
];

arrayObjeto(users);

const compar = (art1, art2, recibe) => {
  let gastado = art1 + art2;
  recibe(gastado);
};
function imprimir(mensaje) {
  console.log(`Compramos leche y Pan - gastamos: ${mensaje}`);
}
compar(7, 77, imprimir);

// --------------------------------------------- *******  ---------------------------------------------

const hacerAlgo = (rec1, rec2, rec3, oFunct) => {
  let calc = (rec1 * rec2 * rec3) / 3;
  let otro = calc % 2;
  console.log(otro);
  oFunct(calc, otro);
};

function oFunct(msn, msn2) {
  console.log(`El calculo de los numero es: ${msn}`);

  if (msn2 === 0) {
    console.log(`El numero ${msn} es Par`);
  } else {
    console.log(`El numero ${msn} es Impar`);
  }
} 

hacerAlgo(7, 6, 7, oFunct); 
 */