import React, {Component} from 'react';
import axios from "axios";
import classes from './speciesDetails.module.css'
import extractIdFromURL from "../../utils";
import Person from "../../People/Person/Person";

export class SpeciesDetails extends Component {

    state = {
        specyData: {},
        residentPeople: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('https://swapi.dev/api/species/'+id).then(response => {
            this.setState({specyData: response.data});
            response.data.people.map( async person => {
                const {id, selfUrl} = extractIdFromURL(person);
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
            <div className={classes.SpeciesDetails}>
                <h1>{this.state.specyData.name}</h1>
                <p>Average Height: {this.state.specyData.average_height}</p>
                <p>Average Lifespan: {this.state.specyData.average_lifespan}</p>
                <p>Classification: {this.state.specyData.classification}</p>
                <p>Designation: {this.state.specyData.designation}</p>
                <p>Eye Colors: {this.state.specyData.eye_colors}</p>
                <p>Hair Colors: {this.state.specyData.hair_colors}</p>
                <p>Planet: {this.state.specyData.homeworld}</p>
                <p>Language: {this.state.specyData.language}</p>
                <p>Skin Colors: {this.state.specyData.skin_colors}</p>
                <div className={classes.personContainer}>{peopleList}</div>
            </div>
        )
    }
}

export default SpeciesDetails;
