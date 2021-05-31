import React, {useState} from "react";
import puppy from './img/puppy.png';
import puppy2 from "./img/puppy2.png";
import kitty from "./img/kitty.png";
import kitty2 from "./img/kitty2.png";
import Photos from "./Photos";
import Info from "./Info";
import axios from "axios";
import './App.css';

export default function App(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [theme, setTheme] = useState("puppy");

  function load() {
    setLoaded(true);
    searchWord();
  }

  function searchWord() {
    //api documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(getData);

    //api documentation: https://www.pexels.com/api/documentation/
    let pexelsApiKey = "563492ad6f91700001000001ecdc6928e461403984161d2bb1839fe9";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers:headers}).then(getPhotos);
  } 

  function getData(response) {
    setData(response.data[0]);
  }

  function getPhotos(response) {
    setPhotos(response.data.photos); //an array of photos
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function changeWord(event) {
    setKeyword(event.target.value);
  }

  function kittyTheme(event) {
    event.preventDefault();
    setTheme("kitty");
    setKeyword("kitty");
    setLoaded(false);
  }

  function puppyTheme(event) {
    event.preventDefault();
    setTheme("puppy");
    setKeyword("puppy");
    setLoaded(false);
  }
  
  if(loaded && theme === "puppy") {
    return (
        <div className="App">
          <div className="row">
            <div className="col-12 align-self-end">
              <div className="App-switch form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="flexSwitchCheckDefault" 
                  onChange={kittyTheme}
                  checked={theme === "kitty"}
                />
                <label className="form-check-label">kitty</label>
              </div>
            </div>
          </div>
          <header className="App-header shadow">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <img 
                  src={puppy} 
                  className="img-fluid mx-auto d-block" 
                  alt="dog" 
                />
              </div>
              <div className="col-sm-4">
                <h1 className="App-title">Dictionary</h1>
                <p>What word are you looking for?</p>  
                <form className="App-form" onSubmit={handleSubmit}>
                  <input 
                    type="search" 
                    className="form-control"
                    onChange={changeWord}
                    value={keyword}
                  />
                  <p className="hint">
                    Hint: sunset, coffee, wine
                  </p>      
                </form>
              </div>
              <div className="col-sm-4">
                <img 
                  src={puppy2} 
                  className="img-fluid mx-auto d-block" 
                  alt="dog" 
                />
              </div>
            </div>
          </header>
          <main className="App-main shadow">
            <Info data={data} theme={theme} />
          </main>
          <section className="App-section shadow">
            <Photos photos={photos} description={keyword} />
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
  } if (loaded && theme === "kitty") {
    return (
        <div className="App-kitty">
          <div className="row">
            <div className="col-12 align-self-end">
              <div className="App-switch form-check form-switch">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="flexSwitchCheckDefault"
                  onChange={puppyTheme} 
                  checked={theme === "kitty"}
                />
                <label className="form-check-label">kitty</label>
              </div>
            </div>
          </div>
          <header className="App-header-kitty shadow">
            <div className="row align-items-center">
              <div className="col-sm-4">
                <img 
                  src={kitty} 
                  className="img-fluid mx-auto d-block" 
                  alt="kat" 
                />
              </div>
              <div className="col-sm-4">
                <h1 className="App-title">Dictionary</h1>
                <p>What word are you looking for?</p>  
                <form className="App-form" onSubmit={handleSubmit}>
                  <input 
                    type="search" 
                    className="form-control"
                    onChange={changeWord}
                    value={keyword}
                  />
                  <p className="hint">
                    Hint: sunset, coffee, wine
                  </p>      
                </form>
              </div>
              <div className="col-sm-4">
                <img 
                  src={kitty2} 
                  className="img-fluid mx-auto d-block" 
                  alt="kat" 
                />
              </div>
            </div>
          </header>
          <main className="App-main shadow">
            <Info data={data}/>
          </main>
          <section className="App-section-kitty shadow">
            <Photos photos={photos} description={keyword} />
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