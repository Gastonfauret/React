# React

---------------------------------------------------------------------------------------------------------------------------------

1 Concepto Basicos y Definiciones.
2 Ventajas de React.
3 Estados (state).
4 Hooks.
5 Event Listener o Event Handler.
6 JSX.
7 Elementos JSX.
8 React DOM.
9 Atributos.
10 Estructura.
11 Creacion de Proyecto.
12 Creacion de Proyecto con Vite.

---------------------------------------------------------------------------------------------------------------------------------

1 Concepto Basicos y Definiciones.

React es una libreria de codigo abierto (repositorio open source).

Se diseño para la creacion de interfaces de usuario.

En una biblioteca, osea, es un conjunto de implementaciones o subprogramas que podemos usar en nuestro codigo.

Componente: Parte de la interfaz de usuario que es independiente y reusable. 

Pueden ser: 

- Funcionales: Son funciones que almacenan a los componentes y retornan a los mismos. 
    - Debe retornar un elemento de React (jsx).
    - Debe comenzar con una mayuscula.
    - Puede recibir valores (propiedades o props), si es necesesario. Los props solo pueden ser enviados desde al padre al hijo.

- De clases: Retorna un componente pero con estructura de clase de js.
    - Trabaja con el metodo render() que devolvera el componente.
    - Extiende los componentes de React. 
        - class saludo extends React.components() {}
    - Puede recibir valores (propiedades o props), si es necesesario.
    - Cuando usamos clase, debemos usar la palabra this para referirse a la propiedades


---------------------------------------------------------------------------------------------------------------------------------

2 Ventajas de React.

Componentes reutilizables.

Crear aplicaciones dinamicas.

Buen desempeño (actualiza solo el componente modificado).

---------------------------------------------------------------------------------------------------------------------------------

3 Estados (state)

Es la representacion en JS del conjunto de propiedades de un componente y sus valores actuales. 

El estado de un componente es basicamente, decimos que nuestro componente tiene determinadas propiedades que queramos asignarlas a nuestro componente, esas propiedades van a tener ciertos valores las cuales van a poder ser actualizadas, de ser necesario. ese conjunto de propiedades y valores se denominan estados.

---------------------------------------------------------------------------------------------------------------------------------

4 Hooks

Es una funcion especial que te permite trabajar con estados en componentes funcionales y otros aspectos de react.

Nos permiten agregarles determinados estados a nuestros componentes funcionales. 

Gracias a estos podemos asignar y actualizar el estado de un componente funcional.

Sin escribir un componente de vclase. esto nos permite escribir codigo mcho mas conciso y facil de entender.

---------------------------------------------------------------------------------------------------------------------------------

5 Event Listener o Event Handler.

Funcion de JS que es ejecutada cuando ocurre un evento.

---------------------------------------------------------------------------------------------------------------------------------

6 JSX

Es una extension de react para la sintaxis de JS. 

JSX = JavaScript XML

Nos permite describir en JS como se veran los componentes usando una estructura similar a HTML (Su estructura, no su estilo).

Su estructura es mas facil de visualizar.

Errores y advertencias mas utiles.

Ejemplo de JSX: const saludo = <h1> Hola, Mundo! </h1>

---------------------------------------------------------------------------------------------------------------------------------

7 Elementos JSX

Un elemento en JSX son las unidades mas pequeñas en React, estas definen lo que se ve en la pantalla.

Podemos definir que un grupo de elementos JSX construyen un componente.

Se puede usar y crear cualquier elemento de HTML.

Para diferenciar a los elementos creado por nosotros y los elementos HTML, se los escribe con letra mayuscula.

Elemento HTML: <p>, <div>, <h1>, <h2>, <img>, etc. (comienzan con minuscula)

Elementos de creacion propia: <Footer>, <Header>, <Slogan>, <Aboutus>, etc. (comienzan con mayuscula, nombre de asignacion propia).

---------------------------------------------------------------------------------------------------------------------------------

8 React DOM

El Document Object Model, es la representacion en el navegador de todos los elementos que conforman una pagina web (Arbol invertido).

El React DOM, es el paquete que facilita la interaccion y actualizacion del DOM en Aplicaciones React.

---------------------------------------------------------------------------------------------------------------------------------

9 Atributos

La principal diferencia entre JS y JSX en sus atributos, es la forma de escribir su clase.

En JS tenemos la palabra reservada class y su nombre, para poder definir los atributos de un elemento.

Ejemplo: <div class='header'></div>

En JSX tenemos la palabra nameClass y su nombre para cumplir con la misma funcion.

Ejemplo: <div className='header'></div>

---------------------------------------------------------------------------------------------------------------------------------

10 Estructura

Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras mas complejas.

---------------------------------------------------------------------------------------------------------------------------------

11 Creacion de Proyecto.

Para crear el proyecto desde cero en una carpeta espesifica, debemos poner en la terminal el comando: 
    
    - npx create-react-app nombre-de-la-carpeta-que-se-creara

Para crear el proyecto en la carpeta en que estamos ubicados, el comando es el siguiente:

    - npx create-react-app .

---------------------------------------------------------------------------------------------------------------------------------

12 Creacion de Proyecto con Vite.

    - npm create vite@latest <nombre-de-mi-proyecto>

    - Seleccion de Framework: React.

    - Seleccion de Lenguaje: Javascript.

    - Posicionamiento en la Carpeta del Proyecto creada: cd <nombre-de-mi-proyecto>.

    - Ubicado en la carpeta, instalamos los modulos de npm: npm install.

    - Finalmente, iniciamos el proyecto de manera local: npm run dev.

---------------------------------------------------------------------------------------------------------------------------------

6:19:13