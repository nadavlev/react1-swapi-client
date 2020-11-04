import React, {Component} from 'react';
import axios from 'axios';
import classes from "../App.module.css";
import Person from "./Person/Person";
import extractIdFromURL from '../utils'
import { connect } from 'react-redux'


export class People extends Component {

    state = {
        people: [],
        filteredPeopleList: []
    };


    componentDidMount() {
        getPeople('https://swapi.dev/api/people/', [], (response)=> {
            const people = response.map(person => {
                const {id, selfUrl} = extractIdFromURL(person.url);
                return {...person, id, selfUrl}
            })
            this.setState({people ,filteredPeopleList: people})
        }, err => console.error)
    }

    filterPeople = (event) => {
        const filterValue = event.target.value.toLowerCase();
        const filteredPeopleList = this.state.people.filter(person => {
            const name = person.name.toLowerCase();
            return name.indexOf(filterValue) !== -1;
        });
        this.setState({filteredPeopleList})
    }

    render() {

        const peopleList = this.state.filteredPeopleList.map(person => {
            return (
                <Person
                    key={person.id}
                    personData={person}>
                </Person>
            )
        });

        return (
            <div>
                <div>
                    Filter <input type="text" onChange={(value) => this.filterPeople(value)}/>
                </div>
                <div className={classes.ListContainer}>
                    {peopleList}
                </div>
            </div>
        )
    }

}

export const getPeople = (url, people, resolve, reject) => {
    axios.get(url)
        .then(response => {
            const retrievedPeople = people.concat(response.data.results)
            if (response.data.next !== null) {
                getPeople(response.data.next, retrievedPeople, resolve, reject)
            } else {
                resolve(retrievedPeople)
            }
        })
        .catch(error => {
            console.log(error)
            reject('Something wrong. Please refresh the page and try again.')
        })
}


const mapStateToProps = state => {
    return {
        people: state.people,
        favoritePeople: state.favoritePeople
    }
};

export default connect(mapStateToProps)(People);
