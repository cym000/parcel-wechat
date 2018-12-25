import React, { Component } from 'react';

class Friend extends Component {

    render() {

        const { friend } = this.props;

        return (
            <div className="ng-scope">
                <div className="chat_item slide-left ng-scope">
                    <div className="ext">
                        { friend.lastTime && <p className="attr ng-binding">{friend.lastTime}</p> }
                        {
                            friend.noRemind &&
                            <p className="attr ng-scope no_time">
                                <i className="web_wechat_no-remind"/>
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

export default Friend;