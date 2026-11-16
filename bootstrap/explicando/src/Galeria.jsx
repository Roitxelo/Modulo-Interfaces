import './App.css'
import Button from './Button.jsx'
import { useState } from 'react'
import {sculptureList} from './data.jsx'

export default function Galeria() {

  const [index, setIndex] = useState(0)
  let escultura = sculptureList[index]

  function onSeguinteClick(){
    if(index < sculptureList.length -1){
      setIndex(index+1)
    }else{
      setIndex(0)
    }
  }

  const [amosar, setAmosar] = useState(false)
  
  function onDetalles(){
    
    if(!amosar){
      
      setAmosar(true)
    }else{
      setAmosar(false)
    }
  
  }

  return (
    <>
      <Button onClick= {onSeguinteClick}>Seguinte</Button>
      
      <h2>{escultura.name}</h2>
      
      <img src={escultura.url} alt={escultura.alt} style={{width:'120px', height:'120px'}}></img>
      
      <Button onClick={onDetalles}>{amosar ? 'Ocultar detalles' : 'Mostrar detalles'}</Button>
      {(amosar) && <p>{escultura.description}</p>}
      
      <h3>Imaxe {index + 1} de {sculptureList.length}</h3>
    </>
  )
}


