//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí

const cantidad = Number(prompt("¿Cuántos códigos de taquilla quieres mostrar?"))

if (!Number.isInteger(cantidad) || cantidad <= 0) {
    console.log("Introduce un número entero mayor que 0.")
} else {
    let encontrados = 0;
    let numero = 2;

    while (encontrados < cantidad) {
        let esPrimo = true

        for (let divisor = 2; divisor * divisor <= numero; divisor++) {
            if (numero % divisor == 0) {
                esPrimo = false
                break;
            }
        }

        if (esPrimo) {
            console.log(numero)
            encontrados++
        }

        numero++
    }
}