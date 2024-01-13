import React from 'react';

export default function MainContent() {
  return (
    <div>
      <h1>React Azen - Repository</h1>
      <ol>
        <li><a href="https://github.com/jmlopezzu/react-azen">Github -- React Azen</a></li>
      </ol>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="./ctb.png" alt="ctb" width={'80px'}/>
          <h2>Presupuesto</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="./ltr.png" alt="ltr" width={'80px'} />
          <h2>Lotería</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="./aur.png" alt="aur" width={'80px'} />
          <h2>Proyecto Aurora</h2>
          <p>Clic para ingresar</p>
        </div>
      </div>

      <br></br>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="./adm.png" alt="Adm" width={'80px'} />
          <h2>Actos Administrativos</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="fct.png" alt="fct" width={'80px'} />
          <h2>Facturación</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="./ctbl.png" alt="ctbl" width={'80px'} />
          <h2>Contabilidad</h2>
          <p>Clic para ingresar</p>
        </div>
      </div>

      <br></br>

      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          <img src="./tsr.png" alt="tsr" width={'80px'} />
          <h2>Tesorería</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src="./react.png" alt="react" width={'80px'}/>
          <h2>React Azen</h2>
          <p>Clic para ingresar</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src="tri.png" alt="tri" width={'80px'} />
          <h2> TRI </h2>
          <p>Clic para ingresar</p>
        </div>
      </div>
    </div>
  );
}
