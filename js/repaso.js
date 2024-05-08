// *variables
var gnombre = `Emmanuel`; //! Global de tipo string
var gedad = 26; //! Global de tipo numerica
let apellido = `Canela`; //! local de tipo string
let iedad = 26; //! Local de tipo numerica
let useractive = null; //! Local NULA ni true ni false
let pareja = undefined; //! Indefinida
let objeto = { ciudad: `Santiago de los Caballeros`, provincia: `Santiago` }; //! objeto
let array = [`Eduvijez`, `Andres`, `Andreina`, `Emmanuel`, `Mielenia`]; //! array
let clase = new String(""); //! Objeto vacio
let arrayObjeto = [
  //! Array de objetos
  {
    nombre: `Eduvijez`,
    apellido: `Perez`,
    edad: 42,
    sexo: `F`,
    trabaja: false,
  },
  {
    nombre: `Emmanuel `,
    apellido: `Canela`,
    edad: 27,
    sexo: `M`,
    trabaja: false,
  },
];

/*
! ----------------------------------- OPERADORES ARITMETICOS -------------------------------------
* +  SUMA
* -  RESTA
* *  MULTIPLICACION
* /  DIVICION
* %  RESIDUO
* ** EXPONENTE
* ++ INCREMENTO EN 1
* -- DECREMENTO EN 1
* +- INCREMENTO UNITARIO: DEVUELBE LA VARIBEL AUMENTADA 
* -+ DECREMENTO unITARIO: DEVUELBE LA VARIABLE EN DECREMENTO
 
! ----------------------------------- OPERADORES LOGICOS ---------------------------------------
* true VERDADERO 
* false FALSO
* && AND: //? DEVUELBE true si ambos son verdaderos
* || OR: //? DEVUELBE true si almenos uno es verdadero
* ! NOT: //? DEVUELBE true si el otro es falso y viseversa
* = ASIGNACION 
* == IGUALDAD DEBIL
* === IGUALDAD ESTRICTA 
* ! NEGACION: // ?Se utiliza como operador lógico para negar una expresión booleana.
* != DIFERENTE: //? Se utiliza para verificar si dos valores no son iguales, sin tener en cuenta el tipo.
* !== DIFERENTE ESTRICTO: //? Se utiliza para verificar si dos valores no son iguales, teniendo en cuenta el tipo.
* ? OPERADOR TERNARIO: //?  Este operador se utiliza para hacer una evaluación condicional en una sola línea.
* ?? NULLISH COALESCING OPERATOR: //? Este operador se utiliza para proporcionar un valor de respaldo en caso de que un valor sea null o undefined.
* > MAYOR QUE
* < MENOR QUE 
* >= MAYOR O IGUAL QUE 
* <= MENOR O IGUAL QUE 

! ----------------------------------- ORDEN DE PRESEDENCIA -------------------------------------  
* ()
* ** Potencia 
* * Multiplicacion 
* / Divicion residuo
* % Division sin residuo
* + Suma 
* - Resta 
* ++ Incremento 
* -- Decremento 

! ----------------------------------- CARACTERES DE ESCAPE ------------------------------------- 
* \  - Caracter de escape
* \n - Nueva línea
* \r - Retorno de carro
* \t - Tabulación horizontal
* \' - Comilla simple
* \" - Comilla doble
* \\ - Barra invertida
* \b - Retroceso
* \f - Avance de página
! ----------------------------------- NULL UNDEFINED ------------------------------------- 
* null:       El valor es nada, ni true ni false o ususario1 
* undefined : Es indefinido 
* let user = null;             //? El valor no es ni true ni false o user
* let nadaAqui;                //? Indefinida 
* let userLogged = undefined;  //? Indefinida asignada 

! ----------------------------------- OBEJTO Math ------------------------------------- 
* Obtener el numero de PI
* console.log(Math.PI);

* Mostrar solo dos decimales
* console.log(Math.PI.toFixed(2));

* Quita los decimales
* console.log(Math.floor(Math.PI));

* Redondear un numero
* console.log(Math.round(4.8));
* console.log(Math.round(Math.PI));

* Pasar un numero negativo a un numero absoluto o positivo
* console.log(Math.abs(-404));

* Calcular potencia
* console.log(Math.pow(2,2));
* console.log(2 ** 3);

! ----------------------------------- CONDICIONALES ------------------------------------- 
* let edad = 20;
* if(edad ) { console.log("Eres mayor a 18"); }  //? CONDICIONAL SIMPLE 

* let edad = 15 ;
* if ( edad >= 18 ) { console.log("Eres adolescente ") } else { console.log("Eres un niñ@") } //? CONDICIONAL COMPUESTA

* let hora = 14;
* if ( hora < 12 ) { console.log("Buenos dias") } else if ( hora < 18 ) { console.log("Buenas tardes")} else { console.log("Buenas noches")}  //? CONDICIONAL MULTIPLE 

* let edad = 20;
* let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";  //? CONDICION EN UNA SOLA LINEA 

* let edad = 20;
*  let mensaje = (edad >= 18) ? () => {console.log("Eres mayor de edad"); alert("Eres mayor de edad");} : () => {console.log("Eres menor de edad"); alert("Eres menor de edad");};

! ----------------------------------- CICLOS -------------------------------------
----****----****----****----****----****----****----****----****----****----**** //? FOR 
*  for ( let i = 0; i < 5; i++ ) { 
  *       código a repetir
*  }

----****----****----****----****----****----****----****----****----****----**** //? FOR IN 
* let persona = {nombre: "Juan", edad: 30, ciudad: "Santo Domingo"};
* for (let propiedad in persona) {
*     console.log(propiedad + ": " + persona[propiedad]);
* }
  
----****----****----****----****----****----****----****----****----****----**** //? FOR OF 
* let colores = ["rojo", "verde", "azul"];
* for (let color of colores) {
*     console.log(color);
* }
  
----****----****----****----****----****----****----****----****----****----**** //? FOREACH
* function forEach(array, callback) {
*     for (let i = 0; i < array.length; i++) {
*         callback(array[i], i, array);
*     }
* }
* 
* let colores = ["rojo", "verde", "azul"];
* forEach(colores, function(color, index) {
*     console.log(color + " está en la posición " + index);
* });
  
----****----****----****----****----****----****----****----****----****----**** //? WHILE 
* let i = 0;
* while ( i < 5 ) {   
*      Iteracion o codigo a repetir
*  i++
* };
  
----****----****----****----****----****----****----****----****----****----**** //? DO...WHILE
* let i = 0; 
* do {               
*      Iteracion o codigo a repetir
* i++;
* } while ( i < 5 );
  
! ----------------------------------- FUNCIONES -------------------------------------

----****----****----****----****----****----****----****----****----****----**** //? FUNCION NORMAL
TODO: Definir una función que suma dos números
* function sumar(a, b) {
*       return a + b;
*  };
* console.log(sumar(5, 3)); // Salida: 8
  
----****----****----****----****----****----****----****----****----****----**** //? FUNCION FLECHA
TODO: Definir una función de flecha que multiplica dos números
* const multiplicar = (a, b) => {
*    return a * b;
*  };
* Usar la funcion 
* console.log(multiplicar(5, 3)); // Salida: 15
    
----****----****----****----****----****----****----****----****----****----**** //? FUNCIONES SIN PARAMETROS
TODO: Definir una función que imprime un mensaje
* function saludar() { console.log( `Hola!`) }; 
* saludar(); // Salida: Hola!
      
----****----****----****----****----****----****----****----****----****----**** //? FUNCION CON VALOR DE RETORNO IMPLICITO
TODO: Definir una función de flecha que devuelve la raíz cuadrada de un número
* const raizCuadrada = (num) => Math.sqrt(num);
* console.log(raizCuadrada(16)); // Salida: 4

----****----****----****----****----****----****----****----****----****----**** //? FUNCION CON VALOR PREDETERMINADO
TODO: Definir una función que suma tres números, con valores predeterminados
* function sumar(a = 0, b = 0, c = 0) {
*    return a + b + c;
* };
* console.log(sumar(5, 3)); // Salida: 8
* console.log(sumar(5, 3, 2)); // Salida: 10
  
----****----****----****----****----****----****----****----****----****----**** //? FUNCION COMO ARGUMENTO DE OTRA FUNCION
TODO: Definir una función que recibe una función como argumento y la ejecuta
* function ejecutarFuncion(funcion) {
*    funcion();
* }
TODO: Definir una función que imprime un mensaje
* function mensaje() {
*    console.log("Función ejecutada");
* }
TODO: Usar las funciones
* ejecutarFuncion(mensaje); // Salida: Función ejecutada
  

! ----------------------------------- FUNCIONES DEL OBJETO MATH -----------------------------------
! Optiene PI
console.log(Math.PI);

! Fija los decimales por los parametros hasta 48
console.log(Math.PI.toFixed(48));

! Métodos trigonométricos:
let x = Math.PI / 4; // 45 grados en radianes
console.log(Math.sin(x)); // Imprime ~0.707 (seno de 45 grados)
console.log(Math.cos(x)); // Imprime ~0.707 (coseno de 45 grados)
console.log(Math.tan(x)); // Imprime 1 (tangente de 45 grados)

! Exponenciales y logarítmicos:
let num = 5;
console.log(Math.exp(num)); // Imprime el valor de e elevado a la potencia de 5
console.log(Math.log(num)); // Imprime el logaritmo natural de 5
console.log(Math.log10(num)); // Imprime el logaritmo base 10 de 5
console.log(Math.log2(num)); // Imprime el logaritmo base 2 de 5

! Redondeo y truncamiento:
let num1 = 5.7;
console.log(Math.ceil(num)); // Imprime 6 (redondea hacia arriba)
console.log(Math.floor(num)); // Imprime 5 (redondea hacia abajo)
console.log(Math.round(num)); // Imprime 6 (redondea al entero más cercano)
console.log(Math.trunc(num)); // Imprime 5 (elimina los decimales)

! Valor absoluto:
let num2 = -404;
console.log(Math.abs(num2)); // Imprime 404 (valor absoluto de -404)

! Potenciación y raíces:
let base = 2;
let exponente = 3;
console.log(Math.pow(base, exponente)); // Imprime 8 (2 elevado a la potencia de 3)
console.log(Math.sqrt(9)); // Imprime 3 (raíz cuadrada de 9)
console.log(Math.cbrt(27)); // Imprime 3 (raíz cúbica de 27)

! Geeneración de números aleatorios:
console.log(Math.random()); // Imprime un número aleatorio entre 0 y 1, pero nunca llega a 1

console.log(Math.random() * 1000000000000000 ** Math.PI + Math.sqrt(1783)); // Imprime un número aleatorio entre 1 y 9.9999999999
? NOTA: Esta sencilla funcion se puede como token en algunos casos
*/
