import React from 'react';
import ShoppingList from './ShoppingList';

export function Main() {

  function hello(){
    return (
      alert("Bienvenido a Azen")
    )
  }


  function smile(){
    return (
      alert("Hoy es un gran día")
    )
  }

  function MButton() {
    return (
      <button onClick={hello}>
          Entrar
      </button>
    );
  }
  
  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }

  return (
    <div className='dans'>
      <div>
      <h1> Main App</h1>
      </div>
      <img className="avatar1" src='./logo192.png' alt='logo'/>
      <form>
        <button type='submit'> Boton 1</button>
        <button onClick={smile}>
          <h1> :) </h1>
        </button>
        <MButton />
      </form>
      <AboutPage />
      <ShoppingList />
    </div>
  );
};
