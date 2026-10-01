//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
                                                                               
//################################################################################
const vector1 = Array(4)
const vector2 = Array(4)

for (let i = 0; i < vector1.length; i++) {
    vector1[i] = parseInt(prompt(`Introduce el ${i+1}er número del vector1: `));
    vector2[i] = parseInt(prompt(`Introduce el ${i+1}er número del vector2: `));
}

const vector3 = vector1.map(function(num, i, arr){
    return num * vector2[i]
})

console.log(vector3)