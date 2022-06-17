import logo from './logo.svg';
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Home></Home>
    </div>
  );
}

export default App;
