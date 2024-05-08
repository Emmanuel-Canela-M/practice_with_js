//  Los string son basicamente un objeto ejemplo

/* 
* Cosas que se pueden hacer con los sting
* Reemplazar partes de la cadena por otra cosa
* Verificar si existe una palabra y reeplazarla por otra 
* Contar cuanto caracteres contiene una cadena 
* Cuantas posiciones tiene una cadena 
* Copiar la cadena
* Copiar parte de la cadena 
* Todas estos no son mas que metodos o funciones que se usan en JS 

---------- Estas son las funciones mas conocidas y mas usadas ----------
1.  * **`concat()`**: Une dos o más cadenas y devuelve una nueva cadena.
    * ```javascript
    * let cadena1 = "Hola, ";
    * let cadena2 = "mundo!";
    * let resultado = cadena1.concat(cadena2);
    * console.log(resultado); // "Hola, mundo!"
    * ```
 * 
2.  * **`toUpperCase()`**: Convierte una cadena a mayúsculas.
    * ```javascript
    * let texto = "hola";
    * let resultado = texto.toUpperCase();
    * console.log(resultado); // "HOLA"
    * ```
 * 
3.  * **`toLowerCase()`**: Convierte una cadena a minúsculas.
    * ```javascript
    * let texto = "HOLA";
    * let resultado = texto.toLowerCase();
    * console.log(resultado); // "hola"
    * ```
 * 
4.  * **`trim()`**: Elimina los espacios en blanco al inicio y al final de una cadena.
    * ```javascript
    * let texto = "   Hola   ";
    * let resultado = texto.trim();
    * console.log(resultado); // "Hola"
    * ```
 * 
5.  * **`slice()`**: Extrae una parte de una cadena y devuelve una nueva cadena.
    * ```javascript
    * let texto = "JavaScript";
    * let resultado = texto.slice(0, 4); // Extrae desde el índice 0 hasta el índice 3 (no incluido)
    * console.log(resultado); // "Java"
    * ```
 * 
6.  * **`split()`**: Divide una cadena en un array de subcadenas.
    * ```javascript
    * let texto = "Hola, mundo";
    * let resultado = texto.split(", ");
    * console.log(resultado); // ["Hola", "mundo"]
    * ```
 * 
7.  * **`charAt()`**: Devuelve el carácter en la posición especificada de una cadena.
    * ```javascript
    * let texto = "JavaScript";
    * let resultado = texto.charAt(4); // Devuelve el carácter en el índice 4
    * console.log(resultado); // "S"
    * ```
 * 
8.  * **`indexOf()`**: Devuelve el índice de la primera aparición de un valor especificado en una cadena.
    * ```javascript
    * let texto = "Hola, mundo";
    * let resultado = texto.indexOf("mundo");
    * console.log(resultado); // 6
    * ```
 * 
9.  * **`replace()`**: Reemplaza un valor especificado en una cadena con otro valor.
    * ```javascript
    * let texto = "Hola, mundo";
    * let resultado = texto.replace("mundo", "amigo");
    * console.log(resultado); // "Hola, amigo"
    * ```
 * 
10. *  **`substring()`**: Devuelve una parte de la cadena entre dos índices especificados.
    * ```javascript
    * let texto = "JavaScript";
    * let resultado = texto.substring(0, 4); // Devuelve desde el índice 0 hasta el índice 3
    * console.log(resultado); // "Java"
    * ```
*/

// ------------------------------------- ************  -------------------------------------

// let cadena = `Hola-mundo`;
// console.log(typeof cadena);
// console.log(cadena[cadena.length - 1]); //* Sirve para ver el ultimo caracter de un string

//* NOTA: Los String en Js empiezan con el indice en 0, a estos indices se puede acceder mediante los conchetes ejemp: string[0]
//* Un string no se puede redefinir a menos que la variable que la contiene sea alterada

// ------------------------------------- ************  -------------------------------------

//* Obejto string

/*
 * Para crear un objeto nuevo se define usando new Clase (); esto quiere decir, nuevo obejto y le especificamos el tipo de datos que esta va a contener
 * en este caso es de tipo String,el tipo de conteniddo que va a tener este objeto siempre se define en mayusculas *
 * Un obejto basicamente es como un plantilla de que espera cun dato en especifico, este dato se lo podemos porporcionar
 * dentro de los parentesis */

//* Que son los metodos? Los metodos son funciones, pero estas funciones estan declaradas dentro de una clase
// let cadena2 = new String(`TExtO DE PrUeBa`);
// console.log(cadena2.charAt(1));
// console.log(cadena2.toLowerCase());
// console.log(cadena2.toLocaleUpperCase());
// console.log(cadena2);

// A una variable, metodo, funcion, clase, se les pueden pasar mas funciones concatenadas con un punto como en el ejemplo de abajo
// let cadena = `              Este         es un parrafo de            Prueba para quitar los espacios   al principio y al final                                       `;
// console.log (cadena.trim().toUpperCase())

//H O L A - M U N D O --> String o Cadena
//0 1 2 3 4 5 6 7 8 9 --> Indice

//Etodo indexOf
// let saludo = `HOLA-MUNDO`;
// console.log(saludo.indexOf("MUNDO")); //* Dice en que indice empieza una palabra, un array, clase, etc...,
// * Hay que especificarle entro los parentesis la palabra que estmos buscando
// * Cada vez que de como resultado -1 es que no se encontro ninguna conincidencia con el indexOf 
// * Ojo que la conisidencia no es con la primera palabra si no con la palabra entera 
// * El primer resulado que esta mostrara es el primero que coninsida, los demas seran ignorados


//!NOTAAAA jaja, si le especificamos entre parentesis algo, significa que estamos dando prioridad a este fracmento de codigo primero
//? EJEMPLO

// console.log((`UN TEXTO DE PRUEBA` + saludo).indexOf('O',8))

//? En teoria el indice qe deberia devolver era el 1 ya que en la palabra HOLA-MUNDO 
//? la O esta en el inice 1, pero como cambiamos el orden, la primera coninsidencia que tubo fue con el texto que le concateamos 
//? Si la letra no hubiese sido en mayuscula como la puse, esta no hubiese tenido coinsidencia y el resulado seria otro
//? El primer parametro de indeOf es lo que queremos que busque, el segundo es para decirle desde donde quiere que empiece a buscarlo 

/* Metodo slice()
 * Hay varias formas de hacer que una variable cambie su valor de string a numero y viceversa
*/

let cantidadGastado = `$ 550.25`
let pesos = Number(cantidadGastado.slice(2));
console.log(typeof pesos);
console.log(pesos);

//! NOTA: En este caso utilizamos la palabra reservada number, pero podemos utiulizar el simbolo de + en vez de number

// * Aqui estamos forzando que la variable sea si o si de tipo numerica
// * Esto se usa cuando queremos operar con numeros como los de tarjetas, totales de cuenta, facturas con letras y numeros, etc...
// * Asi ya cuando tenemos la variable de tipo string como numero, podemos operar con ella
