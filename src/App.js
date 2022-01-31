import logo from './logo.svg';
import './App.css';

function App() {
  const name = "react";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          print name variable : {name}
        </p>
      </header>
    </div>
  );
}

export default App;
