//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí
const codigo = prompt("Introduce el código del cupón:")
const letras = "abcdefghijklmnñopqrstuvwxyzáéíóúü"

let antiguo;
let nuevo;

do {
    antiguo = prompt("Introduce la letra que quieres sustituir:")
} while (antiguo === null || antiguo.length !== 1 || !letras.includes(antiguo.toLowerCase()));

do {
    nuevo = prompt("Introduce la nueva letra:");
} while (nuevo === null || nuevo.length !== 1 || !letras.includes(nuevo.toLowerCase())
);

if (codigo !== null) {
    console.log("Código actualizado:", codigo.replaceAll(antiguo, nuevo));
}