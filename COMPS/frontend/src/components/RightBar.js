import React from 'react'
import Log from './Log';

export const RightBar = () => {

  // let content;
  //   if (isLoggedIn) {
  //     content = <AdminPanel />;
  //   } else {
  //     content = <LoginForm />;
  //   }


  return (
    <div className="rightmenu">

      <h2> Tag </h2>
      <Log />
      {/* {content} */}
{/* 
      // If you prefer more compact code, you can use the conditional ? operator. Unlike if, it works inside JSX:

      <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
      </div>

      // When you don’t need the else branch, you can also use a shorter logical && syntax:
      <div>
        {isLoggedIn && <AdminPanel />}
      </div> */}
    </div>
  )
}
