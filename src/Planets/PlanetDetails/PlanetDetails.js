import React, {Component} from 'react'
import axios from "axios";
import classes from './planetDetails.module.css'
export class PlanetDetails extends Component {
    state = {planetData: {}};

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://swapi.dev/api/planets/'+id).then(response => {
            this.setState({planetData: response.data});
        });
    }

    render() {
        return (
            <div className={classes.PlanetDetails}>
                <h1>{this.state.planetData.name}</h1>
                <p>Climate: {this.state.planetData.climate}</p>
                <p>Diameter: {this.state.planetData.diameter}</p>
                <p>Gravity: {this.state.planetData.gravity}</p>
                <p>Orbital Period: {this.state.planetData.orbital_period}</p>
                <p>Population: {this.state.planetData.population}</p>
                <p>Rotation Period: {this.state.planetData.rotation_period}</p>
                <p>Surface Water: {this.state.planetData.surface_water}</p>
                <p>Terrain: {this.state.planetData.terrain}</p>
                <p>Residents: {this.state.planetData.residents}</p>
            </div>
        )
    }
}

export default PlanetDetails;
