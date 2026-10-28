export default function Foto() {

  const nome = "Lucía González"
  const rol = "Diseñadora Web"
  const foto = {
    source: "foto.jpg",
    alternativa: "Foto de Lucía"
  }
  const inicio = "2019"

  return (
    <>
    <h1>{nome}</h1>
    <img src={foto.source} alt={foto.alternativa} className="foto" />
    <p className="rol" alt={2026 - inicio}>{rol}</p>
    <label for="correo">Correo</label>
    <input id="correo" type="email" tabindex="1" />
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <p style="color: gray; font-size: 14px"></p>
  </>)
} 



