import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import favOff from '../icons/favOff.png';
import favOn from '../icons/favOn.png'
import styles from './Pokemon.module.css';

class Pokemon extends Component {
    
    favListKey = "pokemons.favoriteList";

    constructor(props) {
        super(props);
        const id = parseInt(props.match.params.id);

        const favList = JSON.parse(localStorage.getItem(this.favListKey)) || 
            localStorage.setItem(this.favListKey, "[]") || [];
        
        const favorite = favList.filter(f => f.id === id).length !== 0;

        this.state = {
            id,
            loading: true,
            favorite,
        };

        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    async componentDidMount() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.state.id}`;
        const response = await fetch(url);
        const result = await response.json();

        this.setState({
            ...this.state,
            ...result,
            loading: false,
        });
    }

    toggleFavorite() {
        const newFav = !this.state.favorite;
        let favList = JSON.parse(localStorage.getItem(this.favListKey));

        this.setState({
            favorite: newFav,
        })
        
        if (newFav) {
            favList.push({id: this.state.id, name: this.state.name});
        }
        else {
            favList = favList.filter(f => f.id !== this.state.id);
        }

        localStorage.setItem(this.favListKey, JSON.stringify(favList));

    }

    render() {
        const {
            id,
            name,
            base_experience,
            weight,
            types
        } = this.state;

        if (this.state.loading) {
            return <h1>loading...</h1>;
        }
        return (
            <div>
                <h1>#{id} {name}</h1>

                <p>Base XP: {base_experience}</p>
                <p>Weight: {weight}</p>

                <p>Types: {
                    types.map(t => {
                        return <span className={"type " + getClassByType(t.type.name)} key={t.slot}>{t.type.name}</span>
                    })
                } 
                </p>

                <img src={this.state.favorite ? favOn : favOff} onClick={this.toggleFavorite} className={styles.small_icon} alt="" ></img><br></br>

                <Link to="/pokemons">Back</Link>

            </div>
        );
    }
}

function getClassByType(type) {
    return `type-${type}`
}

export default Pokemon;