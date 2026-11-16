import { useState } from 'react';
import { productos } from './productos';
import BarraBusca from './BarraBusca';
import ListaProductos from './ListaProductos';

export default function App() {
  const [textoBusca, setTextoBusca] = useState('');

  const produtosFiltrados = productos.filter((produto) => produto.toLowerCase().includes(textoBusca.toLowerCase()));
  
  return (
    <div>
      <h1>Buscador de produtos</h1>
      <BarraBusca textoBusca={textoBusca} onCambioBusca={setTextoBusca} />
      <ListaProductos produtos={produtosFiltrados} textoBusca={textoBusca} />
    </div>
  );
}