import './App.css'

function Cadrado({ valor, onCadradoClick, ganador }) {
  return (
    <button
      className={ganador ? "squareGanador" : "square"}
      onClick={onCadradoClick}>
      {valor}
    </button>
  )
}

function calcularGanador(tablero) {
  const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  for (const [a, b, c] of combinacionesGanadoras) {
    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      return {jugador: tablero[a], linea: [a, b, c]}
    }
  }

  return null
}

export default function Taboleiro({xTurno, cadrados, onXogar}) {
  const ganador = calcularGanador(cadrados)
  const lineaGanadora = ganador ? ganador.linea : []

  let estado

  if (ganador) {
    estado = "Ganador: " + ganador.jugador

  } else {
    estado = cadrados.includes(null) ? "Turno de: " + (xTurno ? "X" : "O") : "Empate"
  }


  function handleClick(i) {
    if (cadrados[i] || calcularGanador(cadrados)) {
      return
    }
    const novosCadrados = cadrados.slice()

    novosCadrados[i] = xTurno ? "X" : "O"
    
    onXogar(novosCadrados)

  }

  return (
    <>
      <div className="estado">{estado}</div>
      <div className="taboleiro">
        {cadrados.map((c, index) => (<Cadrado key={index} valor={c} onCadradoClick={() => handleClick(index) } ganador={lineaGanadora.includes(index)}/>))}
      </div>
    </>
  )
}