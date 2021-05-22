import React, {useState} from "react";
import puppy from './img/puppy.png';
import puppy2 from "./img/puppy2.png";
import './App.css';
import axios from "axios";

export default function App() {
  const [keyword, setKeyword] = useState("poodle");
  //const [loaded, setLoaded] = useState(true);
  const [data, setData] = useState({});

  function getData(response) {
    console.log(response.data[0]);
    setData({
      definition: response.data[0].meanings[0].definitions[0],
      //audio: response.data[0].phonetics[0].audio,
      //phonetics: response.data[0].phonetics[0].text,
      word: response.data[0].phonetics.word
    });
  }

  function searchWord(event) {
    event.preventDefault();
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(getData);
    //setLoaded(true);
  }

  function changeWord(event) {
    setKeyword(event.target.value);
  }
  
  return (
    <div className="App">
      <div className="App-switch form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label">Kitty</label>
      </div>
      <header className="App-header shadow p-3 mb-5">
        <h1 className="App-title">Dictionary</h1>
        <div className="row">
          <div className="col">
            <img src={puppy} className="App-puppy" alt="dog" />
          </div>
          <div className="col">
            <p>What word are you looking for?</p>  
            <form className="App-form clearfix inout-group" onSubmit={searchWord}>
              <div className="col float-left">
                <input 
                type="search" 
                className="form-control App-search"
                autoFocus="on" 
                autoComplete="on" 
                onChange={changeWord}
                placeholder="Ex: poodle" 
              />
              </div>        
            </form>
          </div>
          <div className="col">
            <img src={puppy2} className="App-puppy2" alt="dog" />
          </div>
        </div>
      </header>
      <main className="App-main shadow p-3 mb-5">
        <p>{data.word}</p>
      </main>
      <section className="App-section shadow p-3 mb-5">
        Images go here
      </section>
      <footer className="App-footer">
        <a href="https://github.com/aileenchany/react-dictionary" rel="noopenener noreferrer" target="_blank" >Open-source</a> code.
          {" "}|{" "}By{" "} 
        <a href="https://www.linkedin.com/in/aileen-chanmiranda/" rel="noopenener noreferrer" target="_blank" >ACM</a>
          {" "}|{" "}Hosted on{" "}
        <a href="https://heuristic-liskov-6e075b.netlify.app/" rel="noopenener noreferrer" target="_blank" >Netlify</a>.
      </footer>
    </div>
  );
}