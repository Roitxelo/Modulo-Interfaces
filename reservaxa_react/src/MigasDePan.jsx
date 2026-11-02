export default function MigasDePan({ elementos }) {
  return (
    <nav>
      {elementos.map((elemento, indice) => (
        <span key={indice}>
          {indice > 0 && " / "}
          {elemento}
        </span>
      ))}
    </nav>
  )
}