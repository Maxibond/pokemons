import React from 'react';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import PokemonList from './components/PokemonList'
import Pokemon from './components/Pokemon';
import './App.css';


function App() {
  return (
    <HashRouter>
      <div className="App">

      <Switch>
          <Route path="/pokemons/:id(\d+)" component={Pokemon} />

          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/" component={PokemonList} />

          <Route path="/">
            <h1>Not found sorry man go  <Link to="/">here</Link></h1>
          </Route>
      </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
