import React, {Component} from "react"
import axios from 'axios';
import Specy from './Specy/Spesy'
import classes from '../App.module.css';
import extractIdFromURL from "../utils";


export class Species extends Component {

    state = {species: []};

    componentDidMount() {
        axios.get('https://swapi.dev/api/species').then(response => {
            const species = response.data.results.map(specy => {
                const {id, selfUrl} = extractIdFromURL(specy.url);
                return {...specy, id, selfUrl}
            });
            this.setState({species});
        })
    }

    render(){
        const species = this.state.species.map(specy => {
            return <Specy key={specy.url} specyData={specy} />
        });

        return <div className={classes.ListContainer}>
            {species}
        </div>
    }
}

export default Species;
