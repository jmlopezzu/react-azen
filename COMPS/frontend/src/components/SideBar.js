import React from 'react'

export const SideBar = () => {

  const user = {
    name: 'José Miguel - Azen',
    imageUrl: './git_jmlz.png',
    imageSize: 90,
    // bor:20,
  };
  
  const Profile = () => {
    return (
      <>
        <h1 style={{textAlign: 'center'}}>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            // borderRadius: user.bor
          }}
        />
      </>
    );
  }
  
  return (
    <div className='Sidebar'>
      <h2>Menu</h2>
      <br></br>
      <br></br>
      <br></br>
      <Profile />
    </div>
  )
}
