/*
  1) Programa una funcionque que cuente el numero de caracteres de una cadena de texto, pe.mifuncion("Hola mundo") devolvera 10
*/
// funcion declarada
function contarCaracteres(cadena=""){
  if(!cadena){
    console.warn('No ingresaste ninguna cadena')
  }else{
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}

// funcion expresada
const contarTexto = (texto="")=>
(!texto)
  ? console.warn("No ingresaste un texto")
  :(longuitud === undefined)
    ?console.warn("No ingresaste la longuitud para recortar el texto")
    :console.info(`El texto "${texto}" tiene ${texto.length} caracteres`)


//contarCaracteres("Hola");


/*
  2) Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados. pe.miFuncion("Hola mundo",4) devolvera "Hola"
*/
const recortarTexto = (cadena="",longitud=undefined) =>
(!cadena)
  ?console.warn("No ingrsaste una cadena de texto")
  :console.info(cadena.slice(0,longitud))

//recortarTexto('Hola mundo',2)





/*
  3) Programa una funcion que dada un string te devuelva un array de textos separados por cierto caracter pe.miFuncion("Hola que tal",' ') devolvera ['Hola','que','tal']
*/
const cadenaAArreglo = (cadena="",separador=undefined)=>
(!cadena)
  ?console.warn("No ingresaste una cadena de texto")
  :(separador === undefined)
    ?console.warn("No ingresastes un separador")
    :console.info(cadena.split(separador))

//cadenaAArreglo("Ene,Feb,Mar",",")



/*
  4) Programa una funcion que repita un texto X veces, pe.miFuncion('Hola Mundo',3) devolvera: hola mundo, hola mundo, hola mundo
*/
const repetirTexto = (texto="", veces=undefined) =>{
  if(!texto) return console.warn("No ingresaste un texto");

  if(veces === undefined) return console.warn("No ingresaste el numero de veces a repetir el texto")

  if(veces === 0) return console.error("El numero no puede ser 0")

  if(Math.sign(veces) === -1) return console.error("El numero de veces no puede ser negativo")

  for(let i = 1;i<=veces;i++){
    console.info(`${texto}, ${i}`);
  }
  
}
repetirTexto("Hola",10)



/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

/*
  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

/*
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

/*
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/