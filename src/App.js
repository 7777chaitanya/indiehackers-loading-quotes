import "./App.css";
import { useEffect, useState } from "react";
import {quotes} from './quotes'

function App() {
  return (
    <div className="App">
      <p style={{color: 'red'}}>Note: If someone from Indiehackers want me to take this down. Please reach out to me on <a href="https://twitter.com/chaitanyaj7777" target='_blank'>Twitter</a></p>
      <h1>All Indiehackers website loading quotes</h1>
      {quotes.map((eachQuote, index) => {
        return (
          <div className='quoteCard'>
            <h2>{index+1}{") "}{eachQuote.quote}</h2>
            <p>{eachQuote.byline}</p>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
