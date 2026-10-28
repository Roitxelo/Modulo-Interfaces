function Boton({pista}) {
    return (
        <section className="court-grid">
            <button type="button">
                <img className="panoramica" 
                    src={getImageUrl(boton.imagen)}
                    alt={boton.alternativo} />
                <span className="contenido_visual">
                    <span className="disponibilidad">Libre para reservar: {pista.libre}</span>
                    <span className="titulo_pista">{pista.titulo}</span>
                    <span className="desc_pista">{pista.descripcion}</span>
                </span>
            </button>
        </section>
    )
}

export default function Reservas(){
    return (
        <div>
            <h1>RESERVA XA!</h1>
            <h2>Escolle pista: </h2>
            <p>Mostrámosche as pistas e a súa dispoñibilidade</p>

            <Boton pista={{
                imagen: "assets/padel-court-1.svg",
                alternativo: "Pista da Xunqueira, exterior, no pavillón do centro do concello",
                libre: True,
                titulo: "Pista A Xunqueira",
                descripcion:"Polideportivo Municipal, pista exterior, cor azul"
            }}
            />
            
            <Boton pista={{
                imagen:"assets/padel-court-2.svg",
                alternativo:"Pista de Pardeññas. interior, no complexo deportivo de Pardellas",
                libre:False,
                titulo:"Pista Pardellas",
                descripcion:"Complexo deportivo de Pardellas, pista cuberta, cor vermella"
            }}
            />

            <Boton pista={{
                imagen:"assets/padel-court-2.svg",
                alternativo:"Pista de Pardeññas. interior, no complexo deportivo de Pardellas",
                libre:False,
                titulo:"Pista Pardellas",
                descripcion:"Complexo deportivo de Pardellas, pista cuberta, cor vermella"
            }}
            
            />

        </div>
    )
}