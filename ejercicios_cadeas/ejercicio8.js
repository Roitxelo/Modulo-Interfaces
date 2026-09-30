//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí
const nombre = prompt("Introduce el nombre del socio:")
let resultado = ""

if (nombre != null) {
    for (let i = 0; i < nombre.length; i++) {
        const caracter = nombre[i]

        if (caracter == caracter.toUpperCase()) {
            resultado += caracter.toLowerCase()
        } else {
            resultado += caracter.toUpperCase()
        }
    }

    console.log(resultado)
}