import React from 'react';
import Clock from './clock';
function App() {

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Clock Using Props</h1>
      <Clock color="red" />
      <Clock color="green" />
      <Clock color="blue" /> 
    </div>
  );
}
export default App;