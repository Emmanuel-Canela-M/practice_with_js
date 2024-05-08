/* 
    Sintaxis:  funstion nombre (parametros, parametros) {
        codigo que se quiere ejecutar dentro de la funcion 

        return algo ; //Si se toma como un valor retonarnado. Significa que de algun lado algo recibira un dato o un valor 
    }

NOTA: Los parametros son los objetos o datos que esta nesecita recibir para que esta funcion haga su trabajo 

Practicamente las funciones se hacen para no repetir un bloque de codigo
Es recomendable hacer una sola funcion por archivo js, un solo archivo debe hacer una sola tarea y esta funcion no puede tener tantas lineas de codigo

let mami = compra("Pan","Cereal");
console.log(mami); */

// -------------------------********---------------------------------
// Esta es una funcion asignada a una variable
/* let forma2 = function compra(producto1, producto2) {
    console.log(
      `La compra de ${producto1} y ${producto2} se ah realizado con exito`
    );
    return `Te compre ${producto1} y tambien ${producto2}`;
  }
  
  let regresaDato = forma2("Pan","Huevo");
  console.log(regresaDato);
  
  /*
  Este tipo de funciones asignadas a una variable, tiene una clara desventaja frente a una funcion normal
  ya que esta no tiene el veneficio de "JOISTING", esto quiere decir que esta funcion no se puede llamar 
  desde arriba antes de declararla, en cambio la primera funcion se puede llamar incluso antes de crearla
  */

//----------------------------------- Funciones Flecha --------------------------------------------

/* Sintaxis
let funcionFlecha = (parametro1,parametro2,...) => {
    codigo a ejecutar 
    rerurn `Devolver valor ${parametro1} y ${parametro2};
}

funcionFlecha(argumento1,"argumento2");
 */

//-------------------------------- PRACTICA ---------------------------------

// let funcionFlecha = () => {
//   console.log(`Esto es un saludo desde una funcion flecha`);
//   return `Flecha`
// };

// let recuperaDato = funcionFlecha();

/* NOTA: Las funcioes flecha si o si deben ser creadas antes de usarlas, esto quiere decir que no podemos llamarla
antes de esta ser creada
Tambien cabe mencionar que si asignamos una funcion a una constante, esta puede trar problemas a las hora de pasarle parametros, 
es ovbio que esta
*/

/* 
  *NOTA: --Funciones Flecha-- 

  *const funcionSimple => () console.log(`Hola Mundo`); //Funcion en una sola linea 
  
  *const esperaParam = parametro => console.log(parametro); // Si solo recibe un parametro no es necesario ()

  *const sumar = (dato1, dato2) => dato1 + dato2; //SSi tiene varias parametros y se nesecitan hacer calculos, siempre usar {} y return 
  *console.log(funcionSumar(10,5));

  *const retonernarValor = () => "Si solo es una sola linea no es necesario usar return " // No es necesario usar return si es una sola linea 

  *const retonarObejeto = () => ({nombre:"Juan", apellido: "Garcia"});
  *console.log(retonarObejeto());

*/

/* function sumar1(numero1, numero2) {
  return numero1 + numero2;
}
let result = sumar1();
console.log(sumar1(10, 5));

const sumar = (dato1, dato2) => dato1 + dato2 * 4 ** 10;
console.log(sumar(10, 5));

let objeto = {
  nombre: 'Juan',
  apellido: 'Garcia',
  edad: 18 + 2,
  direccion: 'Matanzas'
}
console.log(objeto); */

