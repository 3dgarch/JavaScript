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
//repetirTexto("Hola",10)



/*
  5) Programa una función que invierta las palabras de una cadena de texto, pe.miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const invertirCadena = (cadena="")=>
  (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""));

//invertirCadena("Hola mundo");


/*
  6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const textoCadena = (cadena="",texto="") => {
  if(!cadena) console.warn("No ingresaste ningun texto");

  if(!texto) console.warn("No ingresaste ninguna palabra");

  let i = 0,
    contador = 0;

  while(i !== -1){
    i = cadena.indexOf(texto,i);
    if(i !== -1){
      i++;
      contador++;
    }
  }

  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}
//textoCadena("hola mundo,hello mundo","mundo")


/*
  7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe.mifuncion("Salas") devolverá true.
*/
const palindromo = (palabra ="")=>{
  if(!palabra) console.warn("No ingresaste una palabra");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return(palabra === alReves)
    ?console.info(`si es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
    :console.info(`No es palindromo, Palabra original ${palabra}, Palabra al reves ${alReves}`);
  
}


/*
  8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (texto="",patron="")=>
  (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patron de caracteres")
      :console.info(texto.replace(new RegExp(patron,"ig"),""));

//eliminarCaracteres("xyz1,xyz2","xyz")


/*
  9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const aleatorio = () => console.info(Math.round((Math.random()*100)+500));

//aleatorio()

/*
  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
const capicua = (numero=0)=>{
  if(!numero) console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);

  numero =  numero.toString();

  let alReves = numero.split("").reverse().join("");

  return(numero === alReves)
    ?console.info(`Si es capicua, Numero original ${numero}, numero al reves ${alReves}`)
    :console.info(`No es capicua, Numero original ${numero}, numero al reves ${alReves}`);

}
//capicua(2023)



/*
  11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/
const factorial = (numero=undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);

  if(numero === 0) return console.error("El numer no puede ser 0");

  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

  let factorial = 1

  for(let i = numero; i>1; i--){
    factorial = factorial*i;
  }

  return console.info(`El factorial de ${numero} es ${factorial}`);
}



/*
  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
const numeroPrimo = (numero=undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado, NO es un numero`);

  if(numero === 0) return console.error("El numero no puede ser 0");

  if(numero === 1) return console.error("El numero no puede ser 1");

  if(Math.sign(numero) === -1) return console.error("El numero no puede ser negativo");

  let divisible = false;

  for(let i = 2; i<numero; i++){
    if((numero % i) ===0){
      divisible=true;
      break;
    }
  }

  return(divisible)
    ?console.info(`El numero ${numero}, NO es primo`)
    :console.info(`El numero ${numero}, SI es primo`);
}
/*
 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/
const numeroParImpar = (numero=undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste un numero");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero`);

  return ((numero % 2) === 0)
    ?console.info(`El numero "${numero}" es Par`)
    :console.info(`El numero "${numero}" es Impar`);
  
}

/*
 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/
const convertirGrados = (grados=undefined, unidad=undefined)=>{
  if(grados===undefined) return console.warn("No ingresaste grados a convertir");

  if(typeof grados!== "number") return console.error(`El valor "${grados}" ingresado, NO es un numero`);

  if(unidadd===undefined) return console.warn("No ingresaste el tipo de grado a convertir");

  if(typeof unidadd !== "string") return console.error(`El valor "${grados}" ingresado, NO es una cadena de texto`);

  if(unidadd.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad no reconocido");

  if(unidadd==="C"){
    return console.info(`${grados}°C = ${Math.round((grados*(9/5))+32)}°F`);
  }else if(unidad ==="F"){
    return console.info(`${grados}°F = ${Math.round(((grados-32)*(5/9)))}°C`);
  }
}

/*
 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
const convertirBinarioDecimal = (numero = undefined, base=undefined)=>{
  if(numero===undefined) return console.warn("No ingresaste el numero a convertir");

  if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un numero.`);

  if(base === undefined) return console.warn("No ingresaste la base a convertir");

  if(typeof base !== "number") return console.error(`El valor "${base}" ingresado, NO es un numero`);

  if(base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
  }else if(base === 10){
    return console.info(`${numero} base ${base} = ${numero.toString(2)} base 2`);
  }
}

/*
 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/
const aplicarDescuento = (monto=undefined, descuento=0)=>{
  if(monto===undefined)return console.warn("No ingresaste el monto");

  if(typeof monto!== "number") return console.error(`El valr "${monto}" ingresado, NO es un numero`);

  if(monto === 0) return console.error("EL monto no puede ser 0");

  if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");


  if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, NO es un numero`);

  if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");

  return console.info(`${monto} - ${descuento}% = ${monto - ((monto*descuento)/100)}`);



}


/*
 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
const calcularAnios =(fecha=undefined) => {
  if(fecha === undefined) return console.warn("No ingresaste la fecha");

  if(!(fecha instanceof Date)) return console.error("El valor ingrsado no es una fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMs = 1000*60*60*24*365
    aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMs);
  
    return(Math.sign(aniosHumanos)===-1)
      ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
      :(Math.sign(aniosHumanos)===1)
        ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
        :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}
/*
  18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/
const contarLetras =(cadena="")=>{
  if(!cadena) return console.warn("No ingresaste una cadena de texto");

  if(typeof cadena !=="string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

  let vocales = 0,
   constantes = 0;

  cadena = cadena.toLowerCase();

  for(let letra of cadena){
    if(/[aeiouáéíóú]/.test(letra)){
      vocales++;
    }
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)){
      constantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonants
  })
}
/*
  19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/
const validarNombre = (nombre="") => {
  if(!nombre) return console.warn("No ingresaste un nombre");

  if(typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresao, NO es una cadena de texto`);

  let expReg= /^[A-Za-z\s]+$/g.test(nombre);

  return(expReg)
    ?console.info(`"${nombre}", es un nombre valido`)
    :console.warn(`"${nombre}", NO es un nombre valido`)
}

/*
  20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
//La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
const validarEmail = (email="")=>{
  if(!email) return console.warn("No ingresaste un email");

  if(typeof email !== "string") return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return(expReg)
    ?console.info(`"${email}", es un email valido`)
    :console.warn(`"${email}", NO es un email valido`)
}


/*Fusion ejercicio 19 y 20 */
const validarPatron = (cadena="", patron=undefined)=>{
  if(!cadena) return console.warn("No ingresaste una cadena de texto a evaluar");

  if(typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);

 

  if(patron === undefined) return console.error("No ingresaste un patron a evaluar");

  if(!(patron instanceof RegExp)) return console.error(`El valor "${patron}" ingresado, NO es una expresion regular`)

  let expReg = patron.test(cadena);

  return(expReg)
    ?console.info(`"${cadena}", cumple con el patron ingresado`)
    :console.warn(`"${cadena}", NO cumple con el patron ingresado`);
}
//validarPatron("edgar chavez",/^[A-Za-z]+$/g)

/*
  21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/
const devolverCuadrados = (arr=undefined)=>{
  if(arr==undefined) console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

  if(arr.length === 0) console.error("El arreglo esta vacio");

  for(let num of arr){
    if(typeof num !== "number"){
      console.error(`El valor "${num}" ingresado, NO es un numero`);
    }
  }

  const newArr = arr.map(element => element*element);

  return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}`);
}

/*
  22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/
const arrayMinMax =(arr=undefined)=>{
  if(arr==undefined) console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

  if(arr.length === 0) console.error("El arreglo esta vacio");

  for(let num of arr){
    if(typeof num !== "number"){
      console.error(`El valor "${num}" ingresado, NO es un numero`);
    }
  }

  return console.info(`Arreglo original: ${arr}\nValor mayor: ${Math.max(...arr)},\nValor menor: ${Math.min(arr)}`);
}

/*
  23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const separarParesImpares = (arr=undefined)=>{
  if(arr==undefined) console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

  if(arr.length === 0) console.error("El arreglo esta vacio");

  for(let num of arr){
    if(typeof num !== "number"){
      console.error(`El valor "${num}" ingresado, NO es un numero`);
    }
  };

  return console.info({
    pares: arr.filter(num =>num%2 === 0),
    impares: arr.filter(num =>num%2 ===1)
  })
}



/* 
  24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/
const ordenarArreglo = (arr=undefined)=>{
  if(arr==undefined) console.warn("No ingresaste un arreglo de numeros");

  if(!(arr instanceof Array)) console.error("El valor ingresado no es un arreglo");

  if(arr.length === 0) console.error("El arreglo esta vacio");

  for(let num of arr){
    if(typeof num !== "number"){
      console.error(`El valor "${num}" ingresado, NO es un numero`);
    }
  };

  return console.info({
    arr,
    asc: arr.map(element => element).sort(),
    desc: arr.map(element => element).sort().reverse()
  })
}


/*
  25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/
const quitarDuplicados = (arr=undefined)=>{
  if(arr === undefined) return console,warn("No ingresaste un arreglo de numero");

  if(!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo");

  if(arr.length ===0) return console.error("El arreglo esta vacio");

  if(arr.length === 1) return console.warn("El arreglo debe tener añ menos 2 elementos");

  /*return({
    original: arr,
    sinDuplicados: arr.filter((value, index, self)=>self.indexOf(value)===index)
  })
  */
  return console.info({
    original: arr,
    sinDuplicados: [... new Set(arr)]
  })
}
//quitarDuplicados(["x",1,2,"x",2,9,true,true])

/*
  26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/
const  promedio =(arr = undefined)=>{
  if(arr === undefined) return console,warn("No ingresaste un arreglo de numero");

  if(!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo");

  if(arr.length ===0) return console.error("El arreglo esta vacio");

  for(let num of arr){
    if(typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un numero`);
  }

  return console.info(
    arr.reduce((total,num,index,arr)=>{
      total += num;

      if(index===arr.lenght-1){
        return `El promedio de ${arr.join(" + ")} es ${total/arr.lenght}`
      }else{
        return total;
      }
    })
  )
}

/*
  
  27) Programa una clase llamada Pelicula.

  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Pelicula{
  cosntructor([id,titulo,director,estreno,pais,generos,calificacion]){
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;
    this.validarIMDB(id);
  }

  validarCadena(propiedad,valor){
    if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);

  }
  validarIMDB(id){
    if(this.validarCadena("IMDB id",id)){
      if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
        return console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres, los 2 primeros letras minusculs, los 7 restantes numero.`);
      }
    }
  }
}

const peli = new Pelicula({
  
})