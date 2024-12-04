import React from 'react'; // Ensure React is imported
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assuming this file exists
function Myapp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',   /*type of Element*/
//   props: {    /* it is an object*/
//       href: 'https://www.google.com',
//       target: '_blank'
// },
// children : 'Click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)
const anotherUser="chai aur code"
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', rel: 'noopener noreferrer' },
  'Click to visit Google', 
  anotherUser

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     {/* reactElement */}
    {/* {anotherElement} */}
    {/* { <Myapp /> } */}
<App/>
  </StrictMode>,
)
