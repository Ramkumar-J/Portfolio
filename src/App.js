import logo from './logo.svg';
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Particlesbackground from './Particlesbackground';

function App() {
  return (
    <BrowserRouter>
    {/* <Particlesbackground></Particlesbackground> */}
    <div className="App">
     <Navbar></Navbar>
     <main className='container-fluid'>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/education" element={<Education />}/>
     </Routes>
     </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
