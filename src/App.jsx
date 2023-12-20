import React from "react"
import Header from './Components/header/Header'; 
import classes from './App.module.scss';

function App() {

  return (
    <div className={classes.app} >
      <Header />
    </div>
  )
  
}

export default App;
