import React, {Component} from 'react';
import axios from 'axios';
import classes from "../App.module.css";
import Person from "./Person/Person";
import extractIdFromURL from '../utils'
import { connect } from 'react-redux'


export class People extends Component {

    state = {people: []};

    componentDidMount() {
        axios.get('https://swapi.dev/api/people/').then(response => {
            const people = response.data.results.map(person => {
                const {id, selfUrl} = extractIdFromURL(person.url);
                return {...person, id, selfUrl}
            })
            this.setState({people})
        });
    }

    render() {

        const peopleList = this.state.people.map(person => {
            return (
                <Person
                    key={person.id}
                    personData={person}>
                </Person>
            )
        });

        return (
            <div className={classes.ListContainer}>
                {peopleList}
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        people: state.people,
        favoritePeople: state.favoritePeople
    }
};

export default connect(mapStateToProps)(People);
