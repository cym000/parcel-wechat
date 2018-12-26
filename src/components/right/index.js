import React, { Component } from 'react';
import RightHead from './rightHead';
import Empty from './empty';
import Message from './message';
import Tool from './tool';
import map from 'lodash/map';

class Right extends Component {

    render() {

        const { messages } = this.props;

        return (
            <div className="rightArea">
                <div id="chatArea" className="box chat ng-scope no-choose">
                    <RightHead />
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
                            <div className="scroll-element scroll-x">
                                <div className="scroll-element_corner"/>
                                <div className="scroll-arrow scroll-arrow_less"/>
                                <div className="scroll-arrow scroll-arrow_more"/>
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"/>
                                    <div className="scroll-element_inner-wrapper">
                                        <div className="scroll-element_inner scroll-element_track">
                                            <div className="scroll-element_inner-bottom"/>
                                        </div>
                                    </div>
                                    <div className="scroll-bar" style={{ width: 96}}>
                                        <div className="scroll-bar_body">
                                            <div className="scroll-bar_body-inner"/>
                                        </div>
                                        <div className="scroll-bar_bottom"/>
                                        <div className="scroll-bar_center"/>
                                    </div>
                                </div>
                            </div>
                            <div className="scroll-element scroll-y">
                                <div className="scroll-element_corner"/>
                                <div className="scroll-arrow scroll-arrow_less"/>
                                <div className="scroll-arrow scroll-arrow_more"/>
                                <div className="scroll-element_outer">
                                    <div className="scroll-element_size"/>
                                    <div className="scroll-element_inner-wrapper">
                                        <div className="scroll-element_inner scroll-element_track">
                                            <div className="scroll-element_inner-bottom"/>
                                        </div>
                                    </div>
                                    <div className="scroll-bar" style={{ height: 96}}>
                                        <div className="scroll-bar_body">
                                            <div className="scroll-bar_body-inner"/>
                                        </div>
                                        <div className="scroll-bar_bottom"/>
                                        <div className="scroll-bar_center"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Tool />
                    <div id="J_CatchDrop" className="catch-drop-area"/>
                </div>
            </div>
        )
    }
}

Right.defaultProps = {
    messages: [{
        avatar: require("../../../static/images/user.jpg"),
        name: "blank",
        receiver: 0,
        msgType: 3,
        link: require("../../../static/images/dog.jpg"),
        msgTime: "17:01"
    }, {
        avatar: require("../../../static/images/contact.jpg"),
        name: "陈雄韬",
        receiver: 1,
        msgType: 1,
        content: "身份证拿好了?"
    }, {
        avatar: require("../../../static/images/user.jpg"),
        name: "blank",
        receiver: 0,
        msgType: 1,
        content: "要一阵子不能玩了"
    }, {
        avatar: require("../../../static/images/contact.jpg"),
        name: "陈雄韬",
        receiver: 1,
        msgType: 1,
        content: "测试"
    }]
};

export default Right;