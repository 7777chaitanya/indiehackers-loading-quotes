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
      {quotesList.map((eachQuote, index) => {
        return (
          <div className='quoteCard'>
            <h1>{index}{") "}{eachQuote.quote}</h1>
            <p>{eachQuote.byline}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
