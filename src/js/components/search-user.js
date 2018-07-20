import React from 'react';
import APIS from '../constants/api-constants';
import request from '../utils/request-provider';
import ListUsers from './list-users';
import SelectField from './common/select-field';
import constants from '../constants/app-constants';
import '../../index.css';


export default class searchUser extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      gitUsers: [],
      sort: constants.SORT_NAME_AZ,
      currentPage: 1,
      usersPerPage: constants.PER_PAGE_COUNT,
      emptyUsers: ''
    }
  }
  handleSearch(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  searchUser() {
    let data = { q: this.state.searchText };
    let url = APIS.GET_USERS;
    request.fetch(url, data).then(response => {
      if(!response.total_count){
        this.setState({
          emptyUsers: 'NO USERS PRESENT'
        })
      }
      this.setState({
        gitUsers: response.items
      }, this.sortList)
    });
  }

  sortList() {
    let gitUsers;
    if (this.state.sort === constants.SORT_NAME_ZA) {
      gitUsers = _.orderBy(this.state.gitUsers, ['login'], ['desc'])
    }
    if (this.state.sort === constants.SORT_NAME_AZ) {
      gitUsers = _.orderBy(this.state.gitUsers, ['login'], ['asc'])
    }
    if (this.state.sort === constants.RANK_ASC) {
      gitUsers = _.orderBy(this.state.gitUsers, ['score'], ['asc'])
    }
    if (this.state.sort === constants.RANK_DESC) {
      gitUsers = _.orderBy(this.state.gitUsers, ['score'], ['desc'])
    }
    this.setState({
      gitUsers
    });
  }

  handleSort(event) {
    this.setState({
      sort: event.target.value
    }, this.sortList)
  }

  handlePagination(event) {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }
  render() {
    const { gitUsers, currentPage, usersPerPage } = this.state;

    const indexLastUser = currentPage * usersPerPage;
    const indexFirstUser = indexLastUser - usersPerPage;
    const currentUsers = gitUsers.slice(indexFirstUser, indexLastUser);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(gitUsers.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = _.map(pageNumbers, number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handlePagination.bind(this)}
        >
          {number}
        </li>
      );
    });
    return (
      <div>
        <nav className="navbar-nav bg-primary">
          <form className="form">
            <div className="row row-margin-set">
              <div className="margin-left-set col-md-4">
                <div className="form-group">
                  <SelectField handleSelect={this.handleSort.bind(this)} sort={this.state.sort} />
                </div>
              </div>
              <div className="margin-right-set col-md-4">
                <div className="form-control">
                  <input className="no-border-input" placeholder="Search" value={this.state.searchText} onChange={this.handleSearch.bind(this)} onBlur={this.searchUser.bind(this)} />
                  <span className="align-icon-right fa fa-search"></span>
                </div>
              </div>
            </div>
          </form>
        </nav>
        <ul className="list-unstyled result-container">
          <br />
          {(this.state.gitUsers.length > 0) ? <p>{`Total Results: ${this.state.gitUsers.length}`}</p>: <p>{this.state.emptyUsers}</p>}
          <ListUsers gitUsers={currentUsers} />
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>

    )
  }
}