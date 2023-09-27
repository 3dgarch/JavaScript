// setTimeout()  > recibe una callback que va a ejecutar y tambien un tiempo expresado en milisegundos(solo se ejecutara una sola vez)
console.log("Inicio")
setTimeout(() =>{
  console.log("Ejecutando setTimeOut")
},1000);

// setInterval() > recibe una function y un intervalo de tiempo, ejecutandose indefinidamente
setInterval(() =>{
  console.log("Ejecutando setInterval")
},3000);



// ejemplo fecha 
/*

setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

*/

let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

clearTimeout(temporizador);
console.log("Despues del clearTimeOut")