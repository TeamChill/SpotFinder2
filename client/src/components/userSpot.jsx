import React from 'react';
import { userSpotStyle, outerDivStyle } from './skateSpotStyle.js';

export default class UserSpot extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    var style = userSpotStyle;

    return (
      <div style={outerDivStyle}>
        {this.props.user.username}
        <div style={style}>
        </div>
      </div>
    );  
  }
}
