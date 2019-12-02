import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Pokemon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loading: true
        };
    }

    async componentDidMount() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`);
        const result = await response.json();

        this.setState({
            ...this.state,
            ...result,
            loading: false,
        });
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

                <Link to="/pokemons">Back</Link>

            </div>
        );
    }
}

function getClassByType(type) {
    return `type-${type}`
}

export default Pokemon;