export default function BarraBusca({ textoBusca, onCambioBusca }) {
  return (
    <input
      type="text"
      value={textoBusca}
      onChange={(e) => onCambioBusca(e.target.value)}
    />
  );
}