import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './Components/search_bar.js';

class App extends Component {
    render(){
        return <SearchBar />
    };
};





ReactDOM.render(<App />, document.querySelector('#root'));