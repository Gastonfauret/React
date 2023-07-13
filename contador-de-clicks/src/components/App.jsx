import '../styles/App.css'
import Logo from '../assets/react.svg'
import Boton from './Boton'
import Contador from './Contador'
import { useState } from 'react'

function App() {

  //! El Primer parametro (numeroClicks) es la variable que queremos modificar.
  //? El segundo parametro (setNumeroClicks) es la funcion que va a cambiar la variable.
  //* La Variable comienza con valor inicial 0 (useState(0)).
  
  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClic = () => {
    setNumeroClicks(numeroClicks + 1);
  }

  const reiniciarContador = () => {
    setNumeroClicks(0);
  }

  return (
    <>
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img className='freecodecamp-logo' src={Logo} alt="Logo de Freecodecamp" />
        </div>
        <div className="contenedor-principal">
          <Contador numeroClicks={numeroClicks} />
          <Boton
            texto='Click'
            esBotonDeClic={true}
            manejarClic={manejarClic} />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
        </div>
      </div>
    </>
  )
}

export default App
