import { useState } from 'react';
import './App.css';
import Sidenav from './components/sideNav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Profile from './components/Profile';


function App() {

  return (
      <div>
       <Sidenav />
       <Main />
       <Profile />
       <Work />
       <Projects />
       <Contact />
      </div>
     
  )
}

export default App
