import React, { Component } from 'react';
import map from 'lodash/map';
import RightHead from './rightHead';
import Empty from './empty';
import Message from './message';
import Tool from './tool';
import { ScrollX, ScrollY } from '../scroll';

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
                            {/*<ScrollX />*/}
                            {/*<ScrollY />*/}
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
    }, {
        avatar: require("../../../static/images/contact.jpg"),
        name: "陈雄韬",
        receiver: 1,
        msgType: 1,
        content: "我是菜猫"
    }, {
        avatar: require("../../../static/images/tou.jpg"),
        name: "柯银森",
        receiver: 1,
        msgType: 1,
        content: "我是菜头"
    }, {
        avatar: require("../../../static/images/jiaming.jpg"),
        name: "方佳明",
        receiver: 1,
        msgType: 1,
        content: "晚上带你去吃快餐"
    }, {
        avatar: require("../../../static/images/contact.jpg"),
        name: "陈雄韬",
        receiver: 1,
        msgType: 1,
        content: "@所有人<br>狼杀报名表<br>时间：本周六 19：30 <br>地点：瑞景 乐萃咖啡<br>天气：降温注意保暖<br>板子：根据人数决定               <br>不到9人自动流局<br>法官：xx<br>1、平叔<br>2、22<br>3、Nash<br>4、<br>5、<br>6、6666<br>7、6667<br>8、海上霸主<br>9、Lin<br>10、lin+1<br>11、ling<br>12、鱼<br>13、<br><br>待定区<br>1、方志<br>2、凉白开<br>3、乌龟"
    }]
};

export default Right;