import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import RightHead from './rightHead';
import Empty from './empty';
import Message from './message';
import Tool from './tool';
import { ScrollX, ScrollY } from '../scroll';

class Right extends Component {

    render() {

        const { sessionFriend, messages } = this.props;

        return (
            <div className="rightArea">
                <div id="chatArea" className="box chat ng-scope no-choose">
                    <RightHead friend={sessionFriend}/>
                    <div className="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style={{ position: "absolute"}}>
                        <div className="box_bd chat_bd scrollbar-dynamic scroll-content" style={{marginBottom: 0, marginRight: 0, height: "544px"}}>
                            {
                                false &&
                                <Empty />
                            }
                            <div className="ng-scope">
                                {
                                    map(messages, (message, index) => <Message message={message} key={index}/>)
                                }
                            </div>
                            <ScrollX />
                            <ScrollY />
                        </div>
                    </div>
                    <Tool />
                    <div id="J_CatchDrop" className="catch-drop-area"/>
                </div>
            </div>
        )
    }
}

export default connect((props) => {
    const { sessionFriend } = props;
    let messages = [];
    if (sessionFriend.userName && props.messages[sessionFriend.userName]) {
        messages = props.messages[sessionFriend.userName];
    }
    return {
        sessionFriend,
        messages
    };
})(Right);