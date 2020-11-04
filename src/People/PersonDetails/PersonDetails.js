import React , {Component}from 'react';
import axios from "axios";
import {connect} from 'react-redux'
import classes from './personDetails.module.css'

export class PersonDetails extends Component {

    state = {personDetails: {}};

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://swapi.dev/api/people/'+id).then(response => {
            this.setState({personDetails: response.data});
        });
    }

    render() {
        return (
            <div className={classes.PersonDetails}>
                <h1>{this.state.personDetails.name}</h1>
                {/*Possibly do with loop*/}
                <p>Birth Date: {this.state.personDetails.birth_year}</p>
                <p>Eye Color: {this.state.personDetails.eye_color}</p>
                <p>Gender: {this.state.personDetails.gender}</p>
                <p>Hair Color: {this.state.personDetails.hair_color}</p>
                <p>Height: {this.state.personDetails.height}</p>
                <p>Planet: {this.state.personDetails.homeworld}</p>
                <p>Mass: {this.state.personDetails.mass}</p>
                <p>Skin: {this.state.personDetails.skin_color}</p>
                <p>Species: {this.state.personDetails.species}</p>
                <div onClick={() => this.props.onToggleFavorite(this.props.match.params.id)}>
                    {this.props.favoritePeople[this.props.match.params.id] ?
                        'Favorite'
                        : 'Not Favorite'
                    }
                </div><br/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        favoritePeople: state.favoritePeople
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onToggleFavorite: (personId) => dispatch({type: 'ON_TOGGLE_FAVORITE', personId})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonDetails);
