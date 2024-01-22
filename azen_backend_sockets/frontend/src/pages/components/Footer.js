// importar librerias
import React, { useState } from 'react';
import '@primer/octicons/build/build.css';

function App() {
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [showMenuDetails, setShowMenuDetails] = useState(false);

  const toggleContactDetails = () => {
    setShowContactDetails(!showContactDetails);
    setShowMenuDetails(false);
  };

  const toggleMenuDetails = () => {
    setShowMenuDetails(!showMenuDetails);
    setShowContactDetails(false);
  };

  return (
    <div className="footer">
      <div className="footer-content">

      <div className="column">
          <div className="social-icons">
            <img src="./azen_fb.png" alt="AZEN logo" />
          </div>
        </div>

        <div className="column">
          <br />
          <button className="contact-button" onClick={toggleMenuDetails}>
            Menú Principal
          </button>
          <br />
          {showMenuDetails && (
            <div className="contact-details">
              <h3>Comercial</h3>
              <h3>Financiero</h3>
              <h3>Administrativo</h3>
              <h3>Logística</h3>
              <h3>Generales</h3>
              <h3>...</h3>
              <h3>Por definir</h3>
            </div>
          )}
    <div>

        <button className="contact-button">
              Inteligencia de Negocio
            </button>

          <br></br>
          <button className="contact-button" onClick={toggleContactDetails}>
            Contacto 📱
          </button>

          {showContactDetails && (
            <div className="contact-details">
              <h3>📞 312 834 4576 </h3>
              <h3>📧 Email </h3>
              <h3>azen.consultoria@gmail.com 🌐</h3>
            </div>
          )}
        </div>
        </div>

        <div className="column">
          <br />
          <a href="https://github.com/jmlopezzu/react-azen" target="_blank" rel="noopener noreferrer">
            <button className="contact-button">
              Github
            </button>
          </a>
              <div className="github-logo-container">
                <svg
                  height="40"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="40"
                  fill="#000000"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  ></path>
                </svg>
              </div>
        </div>
      </div>

    <div className="footer-bottom">
        <small>2024 - Azen - Develop team</small>
      </div>

    </div>
  );
}

export default App;
