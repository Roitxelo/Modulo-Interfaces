//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################
const dias = [[1, "Lunes", "Laborable"], [2, "Martes", "Laborable"], [3, "Miercoles", "Laborable"], 
[4, "Jueves", "Laborable"], [5, "Viernes", "Laborable"], [6, "Sábado", "Fin de semana"], [7, "Domingo","Fin de semana"]]

let dia = parseInt(prompt(`Introduce un número de día (1-7): `))
console.log(dias[dia - 1][0],
    dias[dia - 1][1],
    dias[dia - 1][2])