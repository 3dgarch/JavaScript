
/* Promise  */
function cuadradoPromise(value){
  if(typeof value !== "number"){
    return Promise.reject(`Error , el valor "${value}" ingresado no es un numero`);
  }

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        value,
        result: value*value
      });
    }, 0| Math.random()*1000);
  });

}


/* Function asincrona */
async function funcionAsincronaDeclarada(){
  // try-catch > manejo de errores
  try {
    console.log('Inicio Async function');

    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj =  await cuadradoPromise(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj =  await cuadradoPromise(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj =  await cuadradoPromise(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj =  await cuadradoPromise(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    obj =  await cuadradoPromise(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`)

    console.log('Fin Async Function')
  } catch (error ) {
    
  }
}

funcionAsincronaDeclarada();