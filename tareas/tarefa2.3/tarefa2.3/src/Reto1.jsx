// RETO 1 · Dividir unha lista en dúas
//
// Agora móstranse todas as linguaxes nunha única lista.
// Cambia o compoñente para que se vexan dúas listas, unha despois da outra:
//   1. "Interpretadas": as que teñen tipo === "interpretada".
//   2. "Outras": todas as demais.
//
// Como usalo: copia este código en src/App.jsx.
// Comproba que non hai avisos na consola do navegador.

const interpretadas = 
[
  { id: 0, nome: "JavaScript", ano: 1995 },
  { id: 2, nome: "Python", ano: 1991 },
  { id: 4, nome: "PHP", ano: 1995 },
]
const compiladas = 
[
  { id: 1, nome: "Java", ano: 1995 },
  { id: 3, nome: "C", ano: 1972 },
  { id: 5, nome: "Go", ano: 2009 },
];

export default function App() {
  const listaInt = interpretadas.map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b>{linguaxe.ano}
    </li>
  ))
  const listaComp = compiladas.map((linguaxe) => (
    <li key={linguaxe.id}>
      <b>{linguaxe.nome}</b>{linguaxe.ano}
    </li>
  ))
  ;

  return (
    <article>
      <h1>Linguaxes de programación</h1>
      <ul>Lista interpretadas: {listaInt}</ul>
      <ul>Lista compiladas: {listaComp}</ul>
    </article>
  );
}
