import React from 'react';

export default function Header() {


  return (

  <header>

      <nav className='nav'>

        <img src={img1} className='nav-logo' width={'80px'} alt="Azen"/>

        <h1 className='nav-title'>Azen</h1>







    <ul className='nav-items'>



          <li className="nav-item"> 
            Comercial 
            <div className="dropdown-content">
              {/* Content for Comercial dropdown */}
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
            </li>




          <li className="nav-item"> 
            Financiero 
            <div className="dropdown-content">
              {/* Content for Financiero dropdown */}
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </li>



          <li className="nav-item"> 
            Administrativo 
            <div className="dropdown-content">
              {/* Content for Administrativo dropdown */}
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </li>
          {/* Repeat the pattern for other list items */}
          <li className="nav-item"> Logistica </li>
          <li className="nav-item"> Generales </li>
          <li className="nav-item"> Por definir </li>
    </ul>




        {/* JSX for Login button with emoji */}
        <div className="login-container">
          <span className="profile-emoji" role="img" aria-label="profile-emoji">
            👤
          </span>
          <button className="login-button">Login</button>
        </div>



      </nav>


    </header>
  );
}
