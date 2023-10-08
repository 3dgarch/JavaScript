let set = new Set([1,2,3,3,4,true, true, false,"hola","HOLA"]);

console.log(set);
console.log(set.size);


const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(true);
console.log(set2)


// Recorrer elementos
for(item of set){
  console.log(itme);
}

set2.forEach(item=> console.log((item)));


// convertir en array 
let arr  = Array.from(set);
console.log(arr);
console.log(arr[0]);

// eliminar
set.delete("HOLA");

// has: > validar si un dato existe
console.log(set.has("hola"));

// clear: > limpia
set2.clear();