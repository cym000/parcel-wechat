import React, { Component } from 'react';
import { connect } from 'react-redux';

class Set extends Component {
    render() {
        return (
            <div id="mmpop_system_menu" className="mmpop ng-scope system_menu" style={{ top: 60, left: 85}}>
                <ul className="dropdown_menu">
                    <li>
                        <a title="关闭桌面通知" className="ng-scope"><i className="menuicon_push_on"/>关闭桌面通知</a>
                    </li>
                    <li>
                       <a title="关闭声音" className="ng-scope"><i className="menuicon_volume_on"/>关闭声音</a>
                    </li>
                    <li>
                        <a title="意见反馈"><i className="menuicon_feedback"/>意见反馈</a>
                    </li>
                    <li className="last_child">
                        <a title="退出"><i className="menuicon_quit"/>退出</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Set;