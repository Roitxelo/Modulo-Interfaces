//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################

let vector = new Array(6)
let suma = 0
let i = 0

while(i < vector.length || vector[i] != 0){
    vector[i] = prompt("Introduce un número (0 para salir): ")
}

let sumaVector = vector.reduce((total, num) => total + num)
console.log(`${vector}
    La suma de los números es: ${sumaVector}`)


