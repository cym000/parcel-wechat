import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Tab from './tab';
import Friend from './friend';
import { ScrollX, ScrollY } from '../scroll';

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
                <div className="leftArea">
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
                        <div className="chat_list scrollbar-dynamic scroll-content scroll-scrolly_visible" style={{ position: "relative" }}>
                            <div className="ng-scope">
                                {
                                    map(friends, (friend, index) => <Friend friend={friend} key={index}/>)
                                }
                            </div>
                            <ScrollX />
                            <ScrollY />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default connect(({ friends, user }) => ({ friends, user }))(Left);