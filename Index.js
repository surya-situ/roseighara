import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';


const Index = () => {
  return (

    <div>
      <App />
    </div>
      
  )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));

root.render(< Index/>);