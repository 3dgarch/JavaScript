let mapa = new Map();
mapa.set("name","Ezed");
mapa.set("lastName","chavez");
mapa.set("age",30);

console.log(mapa);
console.log(mapa.size);

// buscar llave
console.log(mapa.has("correo"));  // false
console.log(mapa.has("age"));  // true

// obtener
console.lñog(mapa.get("name"));  // Ezed

// establecer
console.log(mapa.set("name","Edgar"));

// eliminar
mapa.delete("lastName");


// Recorrer un map
for(let {key, value} of mapa){
  console.log(`llave: ${key}, valor: ${value}`);
}



/* Ejemplo dos */
const mapa2 = new Map([
  ["nombre","Ezed"],
  ["age",30],
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);