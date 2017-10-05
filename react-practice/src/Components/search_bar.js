import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super();

        this.state = { searchTerm: null};
    }
    render() {
        return (
            <div>
              <input onChange= {(event) => {
                    //console.log(event.target.value);
                    this.setState({ searchTerm: event.target.value });
            }
        } />
            <div>{this.state.searchTerm}</div>
        </div>
        );
    };
};

export default SearchBar;