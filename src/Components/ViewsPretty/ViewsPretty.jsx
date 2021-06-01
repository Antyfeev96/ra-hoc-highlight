import { nanoid } from 'nanoid';
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
    console.log(props);
    if (+this.props.views < 0) {
      return null
    } else if (+this.props.views <= 100) {
      const oldComponent = <Component {...props} />
      const NewComponent = New(Component, props)
      return <NewComponent key={nanoid(5)} />
    } else if (+this.props.views >= 1000) {
      const NewComponent = Popular(Component, props)
      return <NewComponent key={nanoid(5)} />
    } else {
      return <Component key={nanoid(5)} />;
    }
  }
};

export default withViews;