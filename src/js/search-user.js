import React from 'react';
import $ from 'jquery'
export default class searchUser extends React.Component {
  constructor(props){
    super();
    this.state = {
      searchText: ''
    }
  }
  handleSearch(event){
    this.setState({
      searchText : event.target.value
    },this.searchUser)
  }
  searchUser(){
    var param = {
      data: {q:this.state.searchText},
      url: "https://api.github.com/search/users",
      method: "GET",
      //headers: _.extend({ 'Content-Type': 'application/json' }, authHeader)
    };
    $.ajax(param);
    console.log('this.state.searchText');
    console.log(this.state.searchText);
  }
  render() {
    return (
      <div>
        <input type="text" name="username" value={this.state.searchText} onChange={this.handleSearch.bind(this)}/>
      </div>
    )
  }
}