import React from 'react';
import APIS from '../constants/api-constants';
import request from '../utils/request-provider';
import ListUsers from './list-users';
import _ from 'lodash';
import SelectField from './common/select-field';
import constants from '../constants/app-constants';

export default class searchUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      gitUsers: [],
      sort: constants.SORT_NAME_AZ
    }
  }
  handleSearch(event) {
    this.setState({
      searchText: event.target.value
    }, this.searchUser)
  }
  searchUser() {
    let data = { q: this.state.searchText };
    let url = APIS.GET_USERS;
    request.fetch(url, data).then(response => {
      this.setState({
        gitUsers: response.items
      },this.sortList)
    });
  }

  sortList(){
    let gitUsers;
    if(this.state.sort === constants.SORT_NAME_ZA){
      gitUsers = _.orderBy(this.state.gitUsers, ['login'],['desc'])
    }
    if(this.state.sort === constants.SORT_NAME_AZ){
      gitUsers = _.orderBy(this.state.gitUsers, ['login'],['asc'])
    }
    this.setState({
      gitUsers
    });
  }

  handleSort(event){
    this.setState({
      sort: event.target.value
    },this.sortList)
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" name="username" value={this.state.searchText} onChange={this.handleSearch.bind(this)} />
        </div>
        <SelectField handleSelect={this.handleSort.bind(this)} sort={this.state.sort}/>
        <ListUsers gitUsers={this.state.gitUsers} />
      </div>
    )
  }
}