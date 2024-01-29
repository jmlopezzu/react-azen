// import React, { useState } from 'react';

// const Log = () => {
//   const [isLoggedIn] = useState(false);

//   let content;

//   if (isLoggedIn) {
//     content = <div>Logged In Content</div>;
//   } else {
//     content = <div>Please log in or create a login form component.</div>;
//   }

//   return (
//     <div>
//       {content}
//     </div>
//   );
// };

// export default Log;

import React, { useState } from 'react';

const Log = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let content;

  if (isLoggedIn) {
    content = <div>Logged In Content</div>;
  } else {
    content = (
      <div>
        Please log in or create a login form component.
        <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      </div>
    );
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Log;




// import React, { useState } from 'react';

// const Log = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   let content;

//   if (isLoggedIn) {
//     content = <div>Logged In Content</div>;
//   } else {
//     content = <div>Please log in or create a login form component.</div>;
//   }

//   return (
//     <div>
//       {content}
//     </div>
//   );
// };

// export default Log;
