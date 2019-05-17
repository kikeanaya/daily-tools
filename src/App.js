import React from 'react';
import Menu from './Components/Menu'
import Calculator from './Components/Calculator'
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Chronometer from './Components/Chronometer';
import About from './Components/About';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path='/' render={() => <About/>}/>
        <Route exact path='/calculator' render={() => <Calculator/>}/>
        <Route exact path='/chronometer' render={() => <Chronometer/>}/>
      </Switch>
    </div>
  );
}

export default App;
