import Taboleiro from "./Taboleiro.jsx"
import {useState} from "react"

export default function Xogo(){

    const[historial, setHistorial] = useState([Array(9).fill(null)])
    const [movementoActual, setMovementoActual] = useState(0)
    const [ascendente, setAscendente] = useState(true)
    const cadradosActuais = historial[movementoActual]
    let xTurno = movementoActual % 2 === 0

    function handleXogo(novosCadrados) {
        const novoHistorial = [...historial.slice(0, movementoActual + 1), novosCadrados]
        setMovementoActual(novoHistorial.length - 1)
        setHistorial(novoHistorial)
    }

    function saltarA(movemento){
        setMovementoActual(movemento)
    }

    const movementos = historial.map((m, index) => {
            if(index === movementoActual){
                return(
                    <li key={index}>
                        <p>Estás no movemento #{index}</p>
                    </li>
                )
            }else{
                return(
                    <li key={index}>
                        <button onClick={() => saltarA(index)}>{index == 0 ? "Ir al inicio del juego" : "Ir al movimiento #"+ index}</button>
                    </li>
                )
            }
    })

    if (!ascendente) {
    movementos.reverse()
    }

    return (
        <div className="game">
            <div className="game-board">
                <Taboleiro xTurno={xTurno} cadrados={cadradosActuais} onXogar={handleXogo}/>
            </div>
            
            <div className="game-info">
                <button onClick={() => setAscendente(!ascendente)}>
                        {ascendente ? "Poñer en orde descendente" : "Poñer en orde ascendente"}
                </button>

                <ol>
                    {movementos}
                </ol>
            </div>
        </div>
    )
}