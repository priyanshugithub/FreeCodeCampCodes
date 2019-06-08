import React from 'react';
import './App.css';

class QuoteBoard extends React.Component{
  render(){
    return(<h1>'Random Quote Machine'</h1>)
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <QuoteBoard />
      </header>
    </div>
  );
}

export default App;
