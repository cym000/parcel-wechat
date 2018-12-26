import React, { Component } from 'react';
import { Left, Right } from './components';

class App extends Component {

    render() {
        return (
            <div className="main_inner">
                <Left />
                <Right />
            </div>
        );
    }
}


export default App;