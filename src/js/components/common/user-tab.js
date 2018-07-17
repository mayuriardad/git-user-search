import React from 'react'
import PropTypes from 'prop-types';

export default class UserTab extends React.Component {
  render() {
    return (
      <li className="media media-card my-4" key={this.props.id}>
        <img className="mr-3 img-thumbnail img-thumbnail-width-height rounded-circle" src={this.props.profilePic} alt="Generic placeholder image" />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.username}</h5>
          <p className="profile-url">{`Profile URL: ${this.props.html_url}`}</p>
          <div className="data-details">
            <div className="row">
              <div className="col-md-8">
                <ul className="list-unstyled">
                  <li>Data One</li>
                  <li>Data One</li>
                </ul>
              </div>
              <div className="col-md-3">
                <button onClick={this.props.showDetails} type="button" className="btn btn-outline-primary set-details-button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Details</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
  }
}
UserTab.propTypes = {
  username: PropTypes.string,
  profilePic: PropTypes.string,
  id: PropTypes.string,
  showDetails: PropTypes.func
};
