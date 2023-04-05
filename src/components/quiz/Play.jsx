import { Helmet } from "react-helmet";

export const Play = ( {counter} ) => {

//   const [ count , setCount] = useState( counter );

// const increment = ( value = 1 ) => {
//   setCount( count + value );
// }

  return (
    <>
      <Helmet><title>Quiz Page</title></Helmet>
      <div className = "questions">
        <h2>Modo Quiz</h2>
        <div>
          <p>
            <span className = "left">1 de 15</span>
            <span className = "right">2:15<span className = "mdi mdi-clock-outline mdi-24px"></span></span>
          </p>
        </div>
        <div>
          <h4>En qué año fue fundado Google?</h4>
        </div>
        <div className="options-container">
          <p className="option">1997</p>
          <p className="option">1998</p>
        </div>
        <div className="options-container">
          <p className="option">1999</p>
          <p className="option">2000</p>
        </div>
        <div className="button-container">
          <button className = "button-container">Anterior</button>
          <button className = "button-container">Siguiente</button>
          <button className = "button-container">Salir</button>
        </div>
      </div>
    </>
  )
}
