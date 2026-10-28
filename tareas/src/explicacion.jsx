// Versión estática: solo JSX, map y key (contenido de la unidad)

function formatDate(date) {
  return new Intl.DateTimeFormat (
    'es-ES',
    {weekday: 'long'}
  ).format(date)
}


export default function Taboleiro() {
  
  const hoxe = new Date();
  const source = "aerea.jpg"
  const alternativa = "IES San Mamede desde una visión aérea"
  const ciclos = "DAM, SMR, FPB"

  return (
  <>
{/*     <div className="board-row">
        <button className="square"> 1 </button>
        <button className="square"> 2 </button>
        <button className="square"> 3 </button>
        </div>
        <div className="board-row">    
        <button className="square"> 4 </button>
        <button className="square"> 5 </button>
        <button className="square"> 6 </button>    
        </div>
        <div className="board-row">
        <button className="square"> 7 </button>
        <button className="square"> 8 </button>
        <button className="square"> 9 </button>
        </div>         */}

    <h1>IES SAN MAMEDE</h1>
    <img src={source} alt={alternativa} className="photo"/>

    <ul>
      <li>ESO</li>
      <li>BACHARELATO</li>
      <li>Ciclos: {ciclos}</li>
    </ul>

<h3>Hoxe é {formatDate(hoxe)}</h3>

    
  </>);
}