import {Component} from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import People from './People/People'
import Planets from './Planets/Planets'
import Species from './Species/Species'

import classes from './App.module.css';
import PersonDetails from "./People/PersonDetails/PersonDetails";
import PlanetDetails from "./Planets/PlanetDetails/PlanetDetails";
import SpeciesDetails from "./Species/SpeciesDetails/SpeciesDetails";
import home from "./home";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className={classes.App}>
                    <header className={classes.AppHeader}>
                        <p> Social Media for Star Wars characters </p>
                    </header>
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><NavLink to="/people" exact>People</NavLink></li>
                                <li><NavLink to="/planets" exact>Planets</NavLink></li>
                                <li><NavLink to="/species" exact>Species</NavLink></li>
                            </ul>
                        </nav>
                    <Route path="/people" exact component={People} />
                    <Route path="/personDetails/:id" exact component={PersonDetails} />
                    <Route path="/planets" exact component={Planets} />
                    <Route path="/planetDetails/:id" exact component={PlanetDetails} />
                    <Route path="/species" exact component={Species} />
                    <Route path="/speciesDetails/:id" exact component={SpeciesDetails} />
                    <Route path="/" exact component={home} />
                </div>
            </BrowserRouter>
    )
    }

}

export default App;
