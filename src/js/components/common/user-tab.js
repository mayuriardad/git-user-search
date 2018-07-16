import React from 'react'
import PropTypes from 'prop-types';

export default class UserTab extends React.Component{
  render(){
    return(
      <div key={this.props.id}>
        <img src={this.props.profilePic}/>
        <p>{this.props.username}</p>
        <button onClick={this.props.showDetails}>details</button>
      </div>
    )
  }
}
UserTab.propTypes = {
  username: PropTypes.string,
  profilePic: PropTypes.string,
  id: PropTypes.string,
  showDetails: PropTypes.func
};
