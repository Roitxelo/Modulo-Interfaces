import "./App.css"
import MigasDePan from "./MigasDePan"
import BadgeDispo from "./BadgeDispo"

function Boton({pista}) {
    return (
        <section className="court-grid">
            <button type="button">
                <img className="panoramica" 
                    src={pista.imagen}
                    alt={pista.alternativo} />
                <span className="contenido_visual">
                    <BadgeDispo 
                        texto={pista.libre ? "Dispoñible" : "Non dispoñible"}

                        // TEMAS DISPONIBLES: Primary Accent Success Danger Warning Info Inverse Secondary
                        tema={pista.libre ? "success" : "danger"}/>
                    <span className="titulo_pista">{pista.titulo}</span>
                    <span className="desc_pista">{pista.descripcion}</span>
                </span>
            </button>
        </section>
    )
}

const pistas = [(
  {
    id: 1,
    imagen: "padel-court-1.svg",
    alternativo: "Pista da Xunqueira, exterior, no pavillón do centro do concello",
    libre: true,
    titulo: "Pista A Xunqueira",
    descripcion:"Polideportivo Municipal, pista exterior, cor azul"
  }
  
),
(
            
  {
    id: 2,
    imagen:"padel-court-2.svg",
    alternativo:"Pista de Pardeññas. interior, no complexo deportivo de Pardellas",
    libre: false,
    titulo:"Pista Pardellas",
    descripcion:"Complexo deportivo de Pardellas, pista cuberta, cor vermella"
    }
  
),
(
  {
    id: 3,
    imagen:"padel-court-3.svg",
    alternativo:"Pista de Pardellas. interior, no complexo deportivo de Pardellas",
    libre: false,
    titulo:"Pista Pardellas",
    descripcion:"Complexo deportivo de Pardellas, pista cuberta, cor vermella"
    }
  
)
]

export default function Reservas(){
    return (
        <div>
            <MigasDePan elementos={["Inicio", "Reservas", "Pistas"]} />
            <h1>RESERVA XA!</h1>
            <h2>Escolle pista: </h2>
            <p>Mostrámosche as pistas e a súa dispoñibilidade</p>

          {pistas.map((pista) => (
            <Boton pista = {pista} key={pista.id} />
          ))}

        </div>
    )
}