/**
 * Procesamiento Single thread y Multi thread
 * Operaciones de CPU y Operaciones de I/O
 * Operaciones Concurrentes y paralisis
 * Operaciones Bloqueantes y no bloqueantes
 * Operaciones Sincronas y Asincronas
 */

/* Codigo Sincrono Bloqueante*/
// funcion anonima autoejecutable
(()=>{
  console.log("Codigo Sincrono");
  console.log("Inicio");

  function dos(){
    console.log("Dos")
  }

  function uno(){
    console.log("Uno");
    dos();
    console.log("Tres")
  }
  uno();
  console.log("Fin");

})()



/* Codigo Asincrono No Bloqueante*/
(()=>{
  
})()