import React from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar'
import './App.css';
import Home from './Components/Pages/Home'
import Alert from './Components/Layouts/Alert';
import About from './Components/Pages/About';
import User from './Components/Users/User';
import GithubState from './Context/Github/GithubState'
import AlertState from './Context/Alert/AlertState';
import NotFound from './Components/Pages/NotFound'
const App = () => {
  
  return (

    <GithubState>
      <AlertState>
    <Router>
    <div className="App">
     
    <Navbar /> { /*You can set custom title and icon */} 
    
    <div className="container">
    
    <Alert />
    <Switch>
      <Route exact path='/' component={Home} />
      
      <Route  exact path='/about'component={About} />
        
      <Route exact path='/user/:login'
      component ={User}
        />
      <Route component={NotFound} />
      

    </Switch>
    
    </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
  );

}

export default App;
