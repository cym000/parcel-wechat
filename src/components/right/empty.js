import React from 'react';

export default ({ sessionFriend }) => (
    <div className="ng-scope">
        <div className="message_empty ng-scope">
            <i className="web_wechat_nomes_icon"/>
            {
                sessionFriend.userName && <p>暂时没有新消息</p>
            }
            {
                !sessionFriend.userName && <p className="">未选择聊天</p>
            }
        </div>
    </div>
);