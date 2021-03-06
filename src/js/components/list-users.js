import React from 'react';
import UserTab from './common/user-tab'
import PropTypes from 'prop-types';
import request from '../utils/request-provider';
import APIS from '../constants/api-constants';
import '../../index.css';

export default class ListUsers extends React.Component {
  constructor() {
    super()
  }

  render() {
    let gitUsers = _.map(this.props.gitUsers, user => {
      return (
        <UserTab username={user.login} profilePic={user.avatar_url} score={user.score} id={user.id} html_url={user.html_url} />
      )
    })
    return gitUsers;
  }
}
ListUsers.propTypes = {
  gitUsers: PropTypes.array
}
// // {

//   "login": "mayurid",
//   "id": 5912228,
//   "node_id": "MDQ6VXNlcjU5MTIyMjg=",
//   "avatar_url": "https://avatars2.githubusercontent.com/u/5912228?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/mayurid",
//   "html_url": "https://github.com/mayurid",
//   "followers_url": "https://api.github.com/users/mayurid/followers",
//   "following_url": "https://api.github.com/users/mayurid/following{/other_user}",
//   "gists_url": "https://api.github.com/users/mayurid/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/mayurid/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/mayurid/subscriptions",
//   "organizations_url": "https://api.github.com/users/mayurid/orgs",
//   "repos_url": "https://api.github.com/users/mayurid/repos",
//   "events_url": "https://api.github.com/users/mayurid/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/mayurid/received_events",
//   "type": "User",
//   "site_admin": false,
//   "score": 62.69015
// },
