import React from 'react'
import PropTypes from 'prop-types'

export default function Views(props) {
  let views;
  switch (props.type) {
    case 'video':
      views = 'Просмотров:'
      break;
    case 'article':
      views = 'Прочтений:'
      break;
    default:
     return null;
  }
  console.log(`${views} ${props.views}`);
  return (
    <p className="views">{views} {props.views}</p>
  )
}

Views.propTypes = {

}
