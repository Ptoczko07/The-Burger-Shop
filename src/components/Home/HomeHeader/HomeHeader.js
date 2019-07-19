import React from 'react';
import {Link} from 'react-router-dom'
import classes from './HomeHeader.css';

const HomeHeader = () => {
  return (
    <div className={classes.HomeHeader}>
      <div>
        <h1 className={classes.h1}>The Burger Shop</h1>
        <h3 className={classes.h3}>The best burgers in the city</h3>
        <Link to='/builder' className={classes.link}>Click here to order</Link>
      </div>
      
    </div>
  )
}

export default HomeHeader
