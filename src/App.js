import dog from './img/dog.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>
      <img src={dog} className="App-img" alt="dog" />
    </div>
  );
}

export default App;
