import React from 'react';
import Screen from './Screen'
import Wheel from './Wheel';
import '../css/app.css'
function App() {
  return (
    <div className="app">
      <div className="case">
        <Screen />
        <Wheel />
      </div>
    </div>
  );
}

export default App;
