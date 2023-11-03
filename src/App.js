import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [quotesList, setQuotesList] = useState([]);
  useEffect(() => {
    let makeCall = true;
    let quoteId = 1;
    while (makeCall) {
      if (quoteId === 150) {
        makeCall = false;
      }
      fetch(
        `https://indie-hackers.firebaseio.com/loadingQuotes/${quoteId}.json`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res === null) {
            makeCall = false;
          } else {
            setQuotesList((p) => [...p, res]);
          }
        })
        .catch((error) => {
          makeCall = false;
          console.error(error);
        });
      quoteId++;
    }
    return () => {};
  }, []);
  console.log(quotesList, quotesList.length);

  return (
    <div className="App">
      <p style={{color: 'red'}}>Note: If someone from Indiehackers want me to take this down. Please reach out to me on <a href="https://twitter.com/chaitanyaj7777" target='_blank'>Twitter</a></p>
      <h1>All Indiehackers website loading quotes</h1>
      {quotesList.map((eachQuote, index) => {
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
