import React, {Component} from "react";
import { Link } from "react-router-dom";


class PokemonList extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            pokemons: [],
            next: "",
            previous: "",
        }
    }

    async componentDidMount() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const result = await response.json();
        this.setState({
            pokemons: result.results
        });
    }

    render() {
        return (
            <div>
                <h1>Pokemons</h1> 
                {
                    this.state.pokemons.map(p => {
                        const pokemonID = getPokemonID(p.url);
                        return (
                            <div key={p.name}>
                                <Link to={`/${pokemonID}`}>{p.name}</Link>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

function getPokemonID(url) {
    const tmp = url.split('/');
    const id = tmp[tmp.length - 2];
    return id;
}

export default PokemonList;
