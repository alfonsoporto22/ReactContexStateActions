import './App.css';
import { useState } from 'react';

import { ContextProvider } from "./SharedState";

import Main from './views/Main';
import About from './views/About'; 

function App() {

  const [ currentView, setCurrentView ] = useState(Main)

  function toMainHandler () {
    setCurrentView(Main)
  }

  function toAboutHandler () {
    setCurrentView(About)
  }

  return (
    <>
      <button onClick={toMainHandler}>To main</button>
      <button onClick={toAboutHandler}>To about</button>
      <ContextProvider>
        {currentView}
      </ContextProvider>
      </>
  );
}

export default App;
