import React from 'react';
import classes from './DescriptionItem.css';

const DescriptionItem = (props) => {
  return (
    <div className={classes.DescriptionItem}>
      <img src={props.url} alt="Avatar" className={classes.img}/>
      <div className="container">
        <h4><b>{props.header}</b></h4> 
        <p>{props.description}</p> 
      </div>
    </div>
  )
}

export default DescriptionItem
