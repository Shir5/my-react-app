import React from "react"
import Header from './Components/header/Header'; 
import Main from './Components/main/Main'; 
import classes from './App.module.scss';

function App() {



  
  return (
    <div className={classes.app} >
      <Header />
      <Main />
    </div>
  )
  
}

export default App;
