import React from 'react';
import Home from './Components/Home'
import Menu from './Components/Menu'
import Calculator from './Components/Calculator'
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Chronometer from './Components/Chronometer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/calculator' render={() => <Calculator/>}/>
        <Route exact path='/chronometer' render={() => <Chronometer/>}/>
      </Switch>
    </div>
  );
}

export default App;
