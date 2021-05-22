import React, {useState} from "react";
import puppy from './img/puppy.png';
import puppy2 from "./img/puppy2.png";
import './App.css';

export default function App() {
  const [word, setWord] = useState("poodle"); //default word

  function handleSubmit(event) {
    event.preventDefault();
    //call api
  }

  function changeWord(event) {
    setWord(event.target.value);
    alert(event.target.value);
  }

  return (
    <div className="App">
      <div className="App-switch form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label">Kitty</label>
      </div>
      <header className="App-header shadow p-3 mb-5">
        <h1 className="App-title">Dictionary App</h1>
        <div className="row">
          <div className="col">
            <img src={puppy} className="App-puppy" alt="dog" />
          </div>
          <div className="col">
            <p>What word are you looking for?</p>
            
            <form className="App-form clearfix inout-group" onSubmit={handleSubmit}>
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
        Content goes here
        <p>{word}</p>
      </main>
      <section className="App-section shadow p-3 mb-5">
        Images go here
      </section>
      <footer className="App-footer">
        <a href="/" rel="noopenener noreferrer" target="_blank" >Open-source</a> code.
          {" "}|{" "}By{" "} 
        <a href="/" rel="noopenener noreferrer" target="_blank" >ACM</a>
          {" "}|{" "}Hosted on{" "}
        <a href="/" rel="noopenener noreferrer" target="_blank" >Netlify</a>.
      </footer>
    </div>
  );
}
