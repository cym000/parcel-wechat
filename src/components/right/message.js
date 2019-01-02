import React, { Component } from 'react';

class Message extends Component {

    render() {

        const { message } = this.props;

        return (
            <div className="ng-scope">
                <div className="clearfix">
                    <div style={{ overflow: "hidden"}}>
                        <div className={message.receiver === 0 ? "message ng-scope me" : "message ng-scope you"}>
                            {
                                message.showTime &&
                                <div className="message_system ng-scope">
                                    <div className="content ng-binding ng-scope">{message.msgTime}</div>
                                </div>
                            }
                            <img className="avatar" src={message.avatar} title={message.name}/>
                            <div className="content">
                                {
                                    message.receiver === 1 && false &&
                                    <h4 className="nickname ng-binding ng-scope">{message.name}</h4>
                                }
                                {
                                    message.msgType === 1  &&
                                    <div className={`bubble js_message_bubble ng-scope ${message.receiver === 1 ? "bubble_default left" : "bubble_primary right"}`}>
                                        <div className="bubble_cont ng-scope">
                                            <div className="plain">
                                                <pre className="js_message_plain ng-binding" dangerouslySetInnerHTML={{ __html: message.content}}/>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    message.msgType === 3  &&
                                    <div className="emoticon ng-scope">
                                        <img className="custom_emoji msg-img" src={message.link} style={{ height: 68.8696}}/>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;