import useState from 'react';
import Header from './components/Header/Header';
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
function App() {
  // const [state,setState]=useState({
  //   web3:null,
  //   contract:null
  // })
  // const saveState=(state)=>{
  //   console.log(state);
  //   setState(state);
  // }

  return (
    <>
    <Header />
    <Home />
    <About />
    <Skills />
    <Project />
    <Contact />
    {/* <Wallet saveState={saveState}></Wallet>
    <Hero state={state}/>
    <Handles />
    <Projects state={state} />
    <Skills />
    <Experience state={state} />
    <Contact state={state} />
    <Handles /> */}
  </>
  );
}

export default App;
