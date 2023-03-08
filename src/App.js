import './App.css';
import generate from "./faker/script";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
     

          <button onClick={() => generate()} >Generate and look at logs</button>
        
      </header>
    </div>
  );
}

export default App;
