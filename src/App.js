import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon';
import './App.css';


function App() {
  return (
    <BrowserRouter basename="/pokemons">
      <div className="App">

      <Switch>
          <Route path="/:id(\d+)" component={Pokemon} />

          <Route exact path="/">
            <PokemonList />
          </Route>

          <Route path="/">
            <h1>Not found sorry man go  <Link to="/">here</Link></h1>
          </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
