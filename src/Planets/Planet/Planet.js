import React from 'react';
import { Link } from 'react-router-dom'
import classes from './planet.module.css'

const planet = (props) => {
    return (
        <div className={classes.Planet}>
            <p>{props.planetData.name}</p>
            <Link to={'/planetDetails/'+props.planetData.id}>Details</Link>
        </div>
    )
};

export default planet;
