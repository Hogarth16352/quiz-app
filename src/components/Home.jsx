import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
        <Helmet><title>AAQ App - Home</title></Helmet>
        <div id = "home">
            <section>
                <div style = { { textAlign: 'center' } }>
                    <span className = "mdi mdi-pencil-outline pencil" ></span>{/* https://pictogrammers.github.io/@mdi/font/5.4.55/ */}
                </div>
                <h1>AAQ App</h1>
                <div className = "play-button-container">
                    <ul>
                        <li><Link className = "play-button" to = "/play/instructions" >Play</Link></li>
                    </ul>
                </div>
                <div className = "auth-container">
                    <Link className = "auth-buttons" id = "login-button" to = "/login" >Acceso</Link>
                    <Link className = "auth-buttons" id = "signup-button" to = "/register" >Registrarse</Link>
                </div>
            </section>
        </div>
    </>
  )
}
