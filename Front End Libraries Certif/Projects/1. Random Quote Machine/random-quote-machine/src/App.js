import React from 'react';
import './App.css';

class QuoteBoard extends React.Component{
  //let quotes = ['a', 'b', 'c', 'd'];
  //var r = quotes[Math.floor(Math.random()*a.length)];
  // constructor(props){
  //   super(props);
  // }
  render(){
    return(<div>
      <h1>'Random Quote Machine'</h1>
      <article class="center mw5 mw6-ns hidden ba mv4">
  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Title of card</h1>
  <div class="pa3 bt">
    <p class="f6 f5-ns lh-copy measure mv0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
      tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.
    </p>
    <h6 class="fl">jsk</h6>
    <a class="f6 link dim ba ph3 pv2 mb2 dib black fr" href="#0" onClick>Button Text</a>
  </div>
  <div></div>
</article>
    </div>)
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
