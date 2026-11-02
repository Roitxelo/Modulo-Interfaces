export default function BadgeDispo({ texto, tema }) {
  return (
    <span className={`badge badge-subtle theme-${tema}`}>
      {texto}
    </span>
  )
}