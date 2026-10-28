const produtos = [
  { id: 1, nome: "Teclado", prezo: 25 },
  { id: 2, nome: "Rato", prezo: 15 },
];

export default function Ej1() {
  return (
    <>
    <h1 className="titulo">Tenda</h1>
    <img src="logo.svg" alt="Logo" />
    <ul>
      {produtos.map((p) => (
        <li>{p.id} - {p.nome} - {p.prezo} €</li>
      ))}
    </ul>
  </>);
}

// ERRO 1 Faltan as etiquetas vacías que envolven ao return
// ERRO 2 A etiqueta img non está cerrada
// ERRO 3 Hay que utilizar a etiqueta className, non class
// ERRO 4 A función Tenda debe comezar por maiúscula
// ERRO 5 Falta mostrar o id no .map