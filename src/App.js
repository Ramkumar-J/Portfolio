import logo from './logo.svg';
import './App.css';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "/node_modules/bootstrap-icons/font/bootstrap-icons.css"
// import "/node_modules/aos/dist/aos.css";
// import "/node_modules/aos/dist/aos.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from "./routes/About";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Education from "./routes/Education";
import Experience from './Experience';
import Footer from './components/Footer';
import Contact from './routes/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid m-0 p-0">
    <Navbar></Navbar>
     {/* <main className='container-fluid bg-secondary bg-opacity-25 h-100 w-100 m-0 p-0'> */}
     {/* <main className='container-fluid m-0 p-0'> */}
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/education" element={<Education />}/>
      <Route path="/contact" element={<Contact />}/>
     </Routes>
     {/* </main> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
