import React, {Component} from "react";


class PokemonList extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            pokemons: [],
            offset: 0,
            limit: 20,
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
        this.setState({
            offset: offset+limit,
        },()=>this.fetchPokemons());
    }

    previous(){
        const {offset, limit} = this.state;
        this.setState({
            offset: offset-limit,
        },()=>this.fetchPokemons());
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
