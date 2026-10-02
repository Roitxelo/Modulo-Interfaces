//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################

let notas = Array.from({lenght: 6}, (_, i) => parseInt(prompt(`Dime la ${i+1}º nota: `)))

let aprobados = notas.filter(x => x >= 5).length

console.log(`${notas}
    Nota máis alta: ${notas.sort((a,b) => a-b)[notas.length - 1]}
    Nota máis baixa: ${notas.sort((a,b) => b-a)[notas.length - 1]}
    Media das notas: ${(notas.reduce((sum, x) => {sum += x})/notas.length).toFixed(2)}
    Núm de aprobados: ${aprobado}`)

