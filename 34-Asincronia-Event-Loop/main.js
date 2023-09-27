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
  console.log("Codigo Asincrono");
  console.log("Inicio");
  function dos(){
    setTimeout(function(){
      console.log("Dos")
    },1000);
  }

  function uno(){
    setTimeout(function(){
      console.log("Uno");
    },0);
    dos();
    console.log("Tres")
  }

  uno();
  console.log("Fin")
})()