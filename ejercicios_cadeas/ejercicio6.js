//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí
const nombrePista = "Pista 1"
const token = nombrePista.split("").reverse().join("")

console.log(token);