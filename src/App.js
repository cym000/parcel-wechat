import React, { Component } from 'react';
import { Left, Right } from './components';
import { connect } from 'react-redux';
import socket from './redux/actions/socket';

class App extends Component {

    componentWillMount() {
        const { fetchSocket } = this.props;
        fetchSocket('ws://192.168.64.128:9501');
    }

    render() {
        return (
            <div className="main_inner">
                <Left />
                <Right />
            </div>
        );
    }
}


export default connect(null, socket)(App);