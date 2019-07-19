import React from 'react';
import {connect} from 'react-redux';

import classes from './NavigationItems.css';

import NavigationItem from './NavigationItem/NavigationItem';
import Aux from '../../../hoc/_Aux';


const navigationItems = (props) => {
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/builder">Burger Builder</NavigationItem>
            {/* if authenticated show orders and logout nav items else sign in nav item */}
            {props.isAuthenticated ? 
            <Aux>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Log Out</NavigationItem>
            </Aux>: 
            <NavigationItem link='/auth'>Log In</NavigationItem>}
        </ul>
    )
    
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }  
}

export default connect(mapStateToProps)(navigationItems);