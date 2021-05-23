import React, {useState} from "react";
import puppy from './img/puppy.png';
import puppy2 from "./img/puppy2.png";
import './App.css';
import axios from "axios";
import Info from "./Info";

export default function App(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);

   function load() {
    setLoaded(true);
    searchWord();
   }

  function searchWord() {
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(getData);
  } 

  function getData(response) {
    setData(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function changeWord(event) {
    setKeyword(event.target.value);
  }
  
  if(loaded) {
    return (
      <div className="App">
        <div className="App-switch form-check form-switch">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="flexSwitchCheckDefault" 
          />
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
              <form className="App-form clearfix input-group" onSubmit={handleSubmit}>
                <div className="col float-left">
                  <input 
                    type="search" 
                    className="form-control App-search"
                    onChange={changeWord}
                    defaultValue={props.defaultKeyword}
                  />
                  <span className="hint">
                    Hint: sunset, coffee, wine
                  </span>
                </div>        
              </form>
            </div>
            <div className="col">
              <img src={puppy2} className="App-puppy2" alt="dog" />
            </div>
          </div>
        </header>
        <main className="App-main shadow p-3 mb-5">
          <Info data={data}/>
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
  } else {
    load(); 
    
    return null;
  }
  
}