import "bootstrap/dist/css/bootstrap.min.css";
import { logger } from "./logger";
import {results} from './socket'
export default function Home() {
  return (
    logger.info('Application started!'),
    console.log('Data '+ JSON.stringify(results)),

      <body className="d-flex h-100 text-center text-white bg-dark justify-content-center">
        <title>Opa!</title>
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            loop="loop"
            muted="muted"
            className="d-flex p-3 mx-auto flex-column"
          >
            <source
              src="rick-astley-never-gonna-give-you-up-video.mp4"
              type="video/mp4"
            />
          </video>

          <main className="px-3">
            <h1>Opa, Opa! Não deveria estar por aqui!</h1>
          </main>

          <footer className="mt-5 text-white-50">
            <p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <a href="https://itu.sp.gov.br/" className="text-white">
                Prefeitura da Instancia Turistica de Itu
              </a>
            </p>
            <p></p>
          </footer>
        </div>
      </body>
  );
}
