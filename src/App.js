import logo from './logo.svg';
import './App.css';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import {Cursor} from './components/Cursor';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Projects} from './components/Projects';
import {Footer} from "./components/Footer";
import {Contact} from "./components/Contact";
import {ParticleBG} from "./components/ParticleBG"
// import 'bootstrap/dist/css/bootstrap/min.css';

function App() {
  return (
    <div className="App">
      <Cursor/>
      <ParticleBG />
      <BackgroundAnimation/>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
