import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
function App() {
  return (
    <div className="App">  
        <div
       className="header"
      >
        <h2>Copy quotes and share it on Twitter</h2>
      </div>
      <Home/>
    </div>
  );
}

export default App;
