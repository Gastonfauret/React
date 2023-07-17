import '../styles/App.css'
import ListaDeTareas from './ListaDeTareas'

function App(props) {

  return (
    <>
      <div className="aplicacion-tareas">
        <p>Gaston Fauret Developer</p>
        <div className="tareas-lista-principal">
          <h1>Mis Tareas</h1>
          <ListaDeTareas  />
        </div>
      </div>
    </>
  )
}

export default App
