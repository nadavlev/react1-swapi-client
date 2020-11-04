import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import classes from './person.module.css'

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p>{props.personData.name} </p>
            {props.personData.spesies?.length ?
            <p> Species: {props.personData.species} </p>
            :<p> No Species </p> }
            <div onClick={() => props.onToggleFavorite(props.personData.id)}>
                {props.favoritePeople[props.personData.id] ?
                    <span className={classes.favoritesButton}>Favorite</span>
                    : <span className={classes.notFavoritesButton}>Not Favorite</span>
                }
            </div><br/>
            <Link to={'/personDetails/'+props.personData.id}>
                Details
            </Link>
        </div>
    )


};

const mapStateToProps = state => {
    return {
        favoritePeople: state.favoritePeople
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleFavorite: (personId) => dispatch({type: 'ON_TOGGLE_FAVORITE', personId})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(person);
