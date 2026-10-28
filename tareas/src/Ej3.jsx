function formatDate(date) {
  return new Intl.DateTimeFormat (
    'es-ES',
    {weekday: 'long'}
  ).format(date)
}


export default function CartaRestaurante() {
  
  const hoxe = new Date()
  const nome = "A DE CHACÓN"
  const source = "nochacon.jpg"
  const alternativa = "Restaurante Mister Bocata de Ponteareas"
  const bocatas = "Trifásico, Polo Mister, Bacon queixo"
  const bebidas = "Viño, cervexa, refrescos, auguiña"
  const calidad = "Nosos productos son da terra!"
  const incrementoProducto = "1€"

  return (
  <>

    <h1>RESTAURANTE {nome}</h1>
    
    <img src={source} alt={alternativa} className="photo"/>
    
    <p className="intro"><b>Miss Bocata en Ponteareas é local popular 
      coñecido por seus abundantes bocadillos e racións a prezos asequibles.</b></p>
    
    <h2><br/>NUESTRA CARTA</h2>
    <p className="infocarta">{calidad}<br/></p>

    <ul>
      <li>Tapas "xeitosas"</li>
      <li>Hamburgesas ricas</li>
      <li>Bocatas varios: {bocatas}</li>
      <li>Bebidas frías: {bebidas}</li>
    </ul>
  <p className="infocarta">Cada ingrediente a maiores ten un coste de: {incrementoProducto}</p>


  <h3>Hoxe {formatDate(hoxe)} temos menú do día</h3>

    
  </>);
}