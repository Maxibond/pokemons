import React, {Component} from "react";


class PokemonList extends Component {

    limit = 20;

    constructor(props) {
        super(props);
        const page = localStorage.getItem("pokemons.page");
        const offset = (page-1)*this.limit;

        this.state = { 
            pokemons: [],
            offset: offset,
            limit: this.limit,
            count: 0,
        }

        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    async componentDidMount() {
        this.fetchPokemons();
    }
    
    async fetchPokemons(){
        const {offset, limit} = this.state;
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
        const response = await fetch(url);
        const result = await response.json();
        this.setState({
            pokemons: result.results,
            count: result.count,
        });
    }
    
    next(){
        const {offset, limit} = this.state;
        const newOffset = offset+limit;
        this.setState({
            offset: newOffset,
        },()=>this.fetchPokemons());
        localStorage.setItem("pokemons.page", newOffset/limit+1);
    }

    previous(){
        const {offset, limit} = this.state;
        const newOffset = offset-limit;
        this.setState({
            offset: newOffset,
        },()=>this.fetchPokemons());
        localStorage.setItem("pokemons.page", newOffset/limit+1);
    }


    render() {
        const {
            offset,
            limit,
            count,
            pokemons,
        } = this.state;
        return (
            <div>
                <h1>Pokemons</h1> 
                {
                    pokemons.map(p => {
                        const pokemonID = getPokemonID(p.url);
                        return (
                            <div key={p.name}>
                                <a href={`/pokemon/${pokemonID}`}>{p.name}</a>
                            </div>
                        );
                    })
                }
                <button disabled={offset<=0} onClick={this.previous}>Previous</button>
                <button disabled={offset+limit>count} onClick={this.next}>Next</button>
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
