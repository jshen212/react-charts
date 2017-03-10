import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

class MainSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }

  enterSearch(e) {
    let searchString = e.target.value;

    this.setState({ searchTerm: searchString})
  };

  submitSearch(e) {
    e.preventDefault();

    console.log(typeof this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.submitSearch.bind(this)}>
        <Input
        onChange={this.enterSearch.bind(this)}
        value = {this.state.searchTerm}
        className='main-search'
        icon='search'
        placeholder='Search...'
        />
      </form>
    );
  }
}

export default MainSearch;
