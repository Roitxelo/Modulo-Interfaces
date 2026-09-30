//################################################################################
// El sistema de verificación de cupones simétricos de ReservaYa comprueba si el
// código promocional introducido es un palíndromo (se lee igual de izquierda a
// derecha que de derecha a izquierda).
//################################################################################
// Escribe tu código aquí
const codigo = prompt("Introduce el código promocional:")

if (codigo != null) {
    const codigoNormalizado = codigo.toLowerCase()
    const codigoInvertido = codigoNormalizado.split("").reverse().join("")

    if (codigoNormalizado == codigoInvertido) {
        console.log("El código es un palíndromo.")
    } else {
        console.log("El código no es un palíndromo.")
    }
}