import './ViewsPretty.scss';
import React from 'react'

function New(props) {
  return (
      <div className="wrap-item wrap-item-new">
          <span className="label">New!</span>
          {props.children}
      </div>
  )
};

function Popular(props) {
  return (
      <div className="wrap-item wrap-item-popular">
          <span className="label">Popular!</span>
          {props.children}
      </div>
  )
};

const withViews = (Component, props) => class extends React.Component {
  render() {
    if (props.views < 0) {
      return null
    } else if (props.views <= 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      )
    } else if (props.views >= 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
        )
    } else {
      return <Component {...props} />;
    }
  }
};

export default withViews;