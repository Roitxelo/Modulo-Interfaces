import { Button } from "./Button"

export default function Toolbar({onGardar, onCancion}){
  return (
    <div>
      <Button onClick={onGardar}>
        Guardar como
      </Button>
      <Button onClick={onCancion}>
        Reproducir canción
      </Button>
    </div>
  )
}


