function Cadrado({valor}){
  return <button className="square"> {valor} </button>
}

export default function Taboleiro() {

  const numeros = [1, 2, 3]


  return (
  <>

    {numeros.map (fila => 
    
    <div className="board-row" key={fila}>
      
      {numeros.map(numero => <Cadrado valor={numero + 3 * fila -3} key={numero} />)}    
      
    </div>
    
    )}
   
  </>);
}