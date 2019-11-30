import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

      <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />

          <Route exact path="/">
            <PokemonList />
          </Route>

          <Route path="/">
            <h1>Not found sorry man go  <a href="/">here</a></h1>
          </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
