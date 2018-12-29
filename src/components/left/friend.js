import React, { Component } from 'react';
import { connect } from 'react-redux';

class Friend extends Component {

    onContact = () => {
        const { friend, sessionFriend, fetchSessionFriend } = this.props;
        if (sessionFriend.userName !== friend.userName) {
            fetchSessionFriend(friend);
        }
    }

    render() {

        const { friend, sessionFriend } = this.props;

        return (
            <div className="ng-scope" onClick={this.onContact}>
                <div className={`chat_item slide-left ng-scope${sessionFriend.userName && friend.userName === sessionFriend.userName ? " active" : ""}`}>
                    <div className="ext">
                        { friend.lastTime && <p className="attr ng-binding">{friend.lastTime}</p> }
                        {
                            friend.noRemind &&
                            <p className="attr ng-scope no_time">
                                <i className={`web_wechat_no-remind${sessionFriend.userName && friend.userName === sessionFriend.userName ? " web_wechat_no-remind_hl" : ""}`}/>
                            </p>
                        }
                    </div>
                    <div className="avatar">
                        <img className="img" src={friend.avatar} alt=""/>
                    </div>
                    <div className="info">
                        <h3 className="nickname">
                            <span className="nickname_text ng-binding">{friend.name}</span>
                        </h3>
                        {
                            friend.lastMsg &&
                            <p className="msg ng-scope">
                                <span className="ng-binding">{ friend.lastMsg }</span>
                            </p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(({ sessionFriend }) => ({ sessionFriend }), require("../../redux/actions/sessionFriend").default)(Friend);