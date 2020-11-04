import React, {Component} from 'react'
import axios from "axios";
import classes from './planetDetails.module.css'
import extractIdFromURL from "../../utils";
import Person from "../../People/Person/Person";
export class PlanetDetails extends Component {
    state = {
        planetData: {},
        residentPeople: []
    };


    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://swapi.dev/api/planets/'+id).then(response => {
            this.setState({planetData: response.data});
            response.data.residents.map( async resident => {
                const {id, selfUrl} = extractIdFromURL(resident);
                axios.get('https://swapi.dev/api/people/'+id).then(personDetails => {
                    let person = personDetails.data;
                    person.id = id;

                    this.setState({residentPeople: [...this.state.residentPeople, person]});
                });
            });
        });
    }

    render() {

        const peopleList = this.state.residentPeople.map(person => {
            return (
                <Person
                    key={person.id}
                    personData={person}>
                </Person>
            )
        });

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
                <div className={classes.residentsContainer}>{peopleList}</div>
            </div>
        )
    }
}

export default PlanetDetails;
