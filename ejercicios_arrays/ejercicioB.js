//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################


const vector = Array.from({length: 7}, (_, i) => prompt(`Introduce la ${i+1} cadena:`))

const vector2 = vector.map((cadena) => cadena.split("").reverse().join(""))

console.log(vector2)