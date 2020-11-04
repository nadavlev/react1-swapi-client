import React from 'react'
import classes from './specy.module.css'
import {Link} from 'react-router-dom'

const specy = (props) => {

    return (
        <div className={classes.Specy}>
            <p>{props.specyData.name}</p>
            <Link to={'/speciesDetails/'+props.specyData.id}>
                Details
            </Link>
        </div>
    )

}

export default specy;
