import React, { Component } from 'react';

class Tab extends Component {

    onChangeTab = (key) => {
        const { selectedKey, onChange } = this.props;
        if (selectedKey !== key) {
            onChange({selectedKey: key});
        }
    }

    render() {

        const { selectedKey } = this.props;

        return (
            <div className="tab">
                <div className="tab_item" onClick={() => this.onChangeTab("chat")}>
                    <a className="chat" title="聊天"><i className={selectedKey === "chat"  ? "web_wechat_tab_chat web_wechat_tab_chat_hl" : "web_wechat_tab_chat"}/></a>
                </div>
                <div className="tab_item ng-scope" onClick={() => this.onChangeTab("public")}>
                    <a className="chat" title="阅读"><i className={selectedKey === "public"  ? "web_wechat_tab_public web_wechat_tab_public_hl" : "web_wechat_tab_public"}/></a>
                </div>
                <div className="tab_item no_extra" onClick={() => this.onChangeTab("friends")}>
                    <a className="chat"title="通讯录"><i className={selectedKey === "friends"  ? "web_wechat_tab_friends web_wechat_tab_friends_hl" : "web_wechat_tab_friends"}/></a>
                </div>
            </div>
        )
    }
}

export default Tab;