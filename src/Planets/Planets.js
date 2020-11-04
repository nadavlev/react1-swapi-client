import React, {Component} from "react";
import Planet from "./Planet/Planet"
import classes from "../App.module.css";
import axios from "axios"
import extractIdFromURL from "../utils";

export class Planets extends Component {

    state = {planets: []};

    componentDidMount() {
        axios.get('https://swapi.dev/api/planets').then(response => {
            const planets = response.data.results.map(planet => {
                const {id, selfUrl} = extractIdFromURL(planet.url);
                return {...planet, id, selfUrl}
            })
            this.setState({planets})
        })
    }

    render(){
        const planetList = this.state.planets.map(planet => {
            return <Planet key={planet.url} planetData={planet}  />
        })

        return <div className={classes.ListContainer}>
            {planetList}
        </div>

    }

}
export default Planets;

