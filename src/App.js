//import { useState, useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

//const LOCAL_STORAGE_KEY = "tasks.app"

function App() {
  const [tasks, setTasks] = useState([]);
  
  // useEffect(
  //   () => {
  //     const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //     if (storedTasks) setTasks(storedTasks)
  //   }, []
  // )
  // useEffect(
  //   () => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  //   }, [tasks]
  // )

  function Navbar(){
    return (
      <div>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/about">About</Link> <br/> <br/>
      </div>
    )
  }

  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home tasks={tasks} setTasks={setTasks}/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    </Router>

    
  );
}

export default App;