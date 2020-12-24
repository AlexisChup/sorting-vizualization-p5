import React from 'react';
import './App.css';

import NavBarTs from './Components/Navbar/NavbarTs'

import SVP from './Components/SVP/SVP'
import Home from './Components/Home/Home'
import { ContainerSketch } from './Components/ContainerSketch/ContainerSketch'

import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBarTs/>

      <Switch>
        <Route path="/bubblesort">
          <ContainerSketch />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <SVP />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
