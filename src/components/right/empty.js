import React from 'react';

export default () => (
    <div className="ng-scope">
        <div className="message_empty ng-scope">
            <i className="web_wechat_nomes_icon"/>
            {
                false && <p>暂时没有新消息</p>
            }
            <p className="">未选择聊天</p>
        </div>
    </div>
);