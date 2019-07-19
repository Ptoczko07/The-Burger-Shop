import React from 'react';
import classes from './DescriptionItems.css';
import DescriptionItem from './DescriptionItem/DescriptionItem';

const cards = {
  ingredients: {
    header     : 'Quality Ingredients',
    description: 'We use the highest quality ingredients.',
    url        : 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  founded: {
    header     : 'Founded in 2019',
    description: 'Started by two friends in April 1, 2019',
    url        : 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  },
  location: {
    header     : 'Location',
    description: 'Located in the West Loop',
    url        : 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  }
}

const DescriptionItems = () => {
  const cardComps = Object.keys(cards).map(key => (
    <DescriptionItem key={key} header={cards[key].header} description={cards[key].description} url={cards[key].url} />
  ))

  return (
    <div className={classes.DescriptionItems}>
      {cardComps}
    </div>
  )
}

export default DescriptionItems
