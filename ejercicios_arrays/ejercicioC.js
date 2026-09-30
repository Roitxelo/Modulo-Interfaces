//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################


const notas = new Array(5)
var suma = 0, alta = 0, baja = 11, aprobado = 0

for (let i = 0; i < notas.length; i++) {
    do{
    notas[i] = prompt(`Introduce la ${i+1}ª nota: `)
    }while (notas[i] < 0 || notas[i] > 10)
    
    if (notas[i] > alta) {
        alta = notas[i]
    }
    if (notas[i] < baja) {
        baja = notas[i]
    }

    suma += notas[i]

    if (notas[i] >= 5) {
        aprobado++
    }
}

console.log(`${notas}
    Nota máis alta: ${alta}
    Nota máis baixa: ${baja}
    Media das notas: ${(suma)}
    Núm de aprobados: ${aprobado}`)

