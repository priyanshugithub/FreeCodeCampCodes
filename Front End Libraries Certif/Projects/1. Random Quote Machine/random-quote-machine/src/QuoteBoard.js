import React from 'react';
import PostData from './data.json';

class QuoteBoard extends React.Component{
  render(){
    return(<div>
      <h1>'Random Quote Machine'</h1>
      <article class="center mw5 mw6-ns hidden ba mv4">
  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Title of card</h1>
  <div class="pa3 bt">
    <p class="f6 f5-ns lh-copy measure mv0">
    {PostData.map((postDetail) => { 
      //var postDetail = quotes[Math.floor(Math.random()*quotes.length)];
      return (<div><h1>{postDetail.quote} - {postDetail.author}</h1></div>)})}
    </p>
    <h6 class="fl">jsk</h6>
    <a class="f6 link dim ba ph3 pv2 mb2 dib black fr" href="#0" onClick>Button Text</a>
  </div>
  <div></div>
</article>
    </div>)
  }
};

export default QuoteBoard;