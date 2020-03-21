import React, {Component} from "react";
import { Link } from "react-router-dom";


class PokemonList extends Component {

    limit = 20;
    pageKey = "pokemons.page";
    favListKey = "pokemons.favoriteList";
        
    favOnly = false;
    
    constructor(props) {
        super(props);

        const page = localStorage.getItem(this.pageKey) || 1;
        
        localStorage.setItem(this.pageKey, page);
        
        const offset = (page-1)*this.limit;

        const favList = JSON.parse(localStorage.getItem(this.favListKey)) || 
            localStorage.setItem(this.favListKey, "[]") || [];
        
        this.state = { 
            favOnly: this.favOnly,
            favPokemons: favList,
            pokemons: [],
            offset,
            limit: this.limit,
            count: 0,
        }

        this.paginator = this.paginator.bind(this);
        this.toggleFavOnly = this.toggleFavOnly.bind(this);
    }

    async componentDidMount() {
        this.fetchPokemons();
    }
    
    async fetchPokemons() {
        const {offset, limit} = this.state;
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        const response = await fetch(url);
        const result = await response.json();
        result.results = result.results.map(p => ({...p, id: getPokemonID(p.url) }));
        this.setState({
            pokemons: result.results,
            count: result.count,
        });
    }
    
    paginator(isNext) {
        const {offset, limit} = this.state;

        const newOffset = isNext ? offset+limit: offset-limit;

        this.setState({
            offset: newOffset,
        }, () => this.fetchPokemons());
        localStorage.setItem(this.pageKey, newOffset/limit+1);
    }

    toggleFavOnly() {
        const newFav = !this.state.favOnly;

        this.setState({
            favOnly: newFav,
        })
    }

    render() {
        const {
            favOnly,
            offset,
            limit,
            count,
            pokemons,
            favPokemons,
        } = this.state;
        return (
            <div>
                <h1>Pokemons</h1>
                <button onClick={this.toggleFavOnly}>{favOnly ? "Show all pokemons" : "Show favorite pokemons"}</button>
                {
                    (favOnly ? favPokemons : pokemons).map(p => {
                        return (
                            <div key={p.name}>
                                <Link to={`/pokemons/${p.id}`}>{p.name}</Link>
                            </div>
                        );
                    })
                }
                <button disabled={offset<=0} 
                        onClick={() => this.paginator(false)}
                        >
                                Previous
                </button>
                <button disabled={offset+limit>count} 
                        onClick={ () => this.paginator(true)}
                        >
                            Next
                </button>
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
