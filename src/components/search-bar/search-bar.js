import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    searchPattern: ''
  }

  onChange = (e) => {
    this.setState({ searchPattern: e.target.value })
    this.props.onSearch(e.target.value);
  }

  render() {
    return <form className="d-flex">
      <input onChange={(e) => this.onChange(e)} value={this.state.searchPattern} className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  }
}
