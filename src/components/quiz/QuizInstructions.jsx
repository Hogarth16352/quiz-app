import { Helmet } from "react-helmet"
import { NavLink } from "react-router-dom"

export const QuizInstructions = () => {
  return (
    <>
        <Helmet><title>Instrucciones - AAQuiz App</title></Helmet>
        <div className = "instructions container">
            <h1>Cómo comenzar a estudiar?</h1>
            <p>Asegúrese de leer esta guía de principio a fin.</p>
            <ul className = "browser-default" id = "main-list">
                <li>La prueba tiene una duración de 120 minutos y termina tan pronto como transcurre el tiempo.</li>
                <li>Cada prueba consiste de 60 preguntas.</li>
                <li>Cada pregunta tiene 4 posibles opciones.</li>
                <li>Selecciona la opción de la opción que consideres mas compatible.</li>
                <li>Cada prueba tiene 2 ayudas:
                    <ul id = "sublist" >
                        <li>
                            2 50-50 posibilidades
                        </li>
                        <li>
                            5 consejos
                        </li>
                    </ul>
                </li>
            </ul>
            <div>
                <span className = "left"><NavLink to = "/">Regresar</NavLink></span>
                <span className = "right"><NavLink to = "/play/quiz">Entendido, adelante!</NavLink></span>
            </div>
        </div>
    </>
  )
}
