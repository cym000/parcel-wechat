import React, { Component } from 'react';
import map from 'lodash/map';
import Tab from './tab';
import Friend from './friend';

class Left extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "chat"
        };
    }

    onChange = (params = {}) => {
        this.setState(params);
    }

    render() {

        const { user, friends } = this.props;
        const { selectedKey } = this.state;

        return (
            <div className="panel give_me">
                <div className="left">
                    <div className="user">
                        <div className="avatar">
                            <img className="img" src={user.avatar} alt=""/>
                        </div>
                        <div className="info">
                            <h3 className="nickname">
                                <span className="display_name ng-binding">{user.name}</span>
                                <a className="opt"><i className="web_wechat_add"/></a>
                            </h3>
                        </div>
                    </div>
                    <div className="search_bar" id="search_bar">
                        <i className="web_wechat_search"/>
                        <input className="frm_search ng-isolate-scope ng-pristine ng-valid" type="text" placeholder="搜索"/>
                    </div>
                    <Tab selectedKey={selectedKey} onChange={this.onChange}/>
                    {
                        selectedKey === "chat" &&
                        <div className="chat_list scrollbar-dynamic scroll-content scroll-scrolly_visible">
                            {
                                map(friends, (friend, index) => <Friend friend={friend} key={index}/>)
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}

Left.defaultProps = {
    user: {
        name: "blank",
        avatar: require("../../../static/images/user.jpg"),
    },
    friends: [{
        name: "崔玲",
        lastTime: "14:09",
        lastMsg: "流浪~木子阳:[收到一条网页版微信暂不支持的消息类型，请在手机上查看]",
        avatar: require("../../../static/images/friend.jpg"),
        noRemind: true
    }, {
        name: "崔玲",
        lastTime: "15:09",
        lastMsg: "下午好",
        avatar: require("../../../static/images/friend.jpg")
    }]
};

export default Left;