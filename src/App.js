import React, { Component } from 'react';
import { Left, Right } from './components';
import { connect } from 'react-redux';
import msg from '../static/audio/msg.mp3';

class App extends Component {

    componentWillMount() {
        // const { fetchSocket } = this.props;
        // fetchSocket('ws://192.168.64.128:9501');
    }

    render() {
        return (
            <div className="main_inner">
                <Left />
                <Right />
                <audio style={{ display: 'none' }} id="volume" preload="metadata" src={msg}/>
            </div>
        );
    }
}


export default connect(null, require("./redux/actions/socket").default)(App);