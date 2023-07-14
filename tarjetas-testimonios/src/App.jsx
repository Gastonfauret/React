import '../src/styles/App.css';
import Testimonio from './components/Testimonio.css';

function App() {
  return (
    <>
      <div className="App">
        <div className="contenedor-principal">
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio
            nombre='Marcela Gonzalez'
            pais='Argentina'
            imagen='foto1'
            cargo='Frontend Dev'
            empresa='Gula'
            testimonio='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'
          />

<Testimonio
            nombre='Mario Straqualursi'
            pais='Ecuador'
            imagen='foto2'
            cargo='Backend Dev'
            empresa='Gula'
            testimonio='but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
          />

<Testimonio
            nombre='Carlos McAllister'
            pais='Bolivia'
            imagen='foto3'
            cargo='Scrum Master'
            empresa='Gula'
            testimonio='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.'
          />
        </div>
      </div>

    </>
  )
}

export default App;

//!2:49:21
