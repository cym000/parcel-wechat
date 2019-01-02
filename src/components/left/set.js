import React, { Component } from 'react';
import { connect } from 'react-redux';

class Set extends Component {

    onNotice = () => {
        const { set, setSetting, collapsedHide } = this.props;
        let notice = 1;
        if (set.notice === 1) {
            notice = 0;
        }
        setSetting({notice});
        collapsedHide();
    }

    onVolume = () => {
        const { set, setSetting, collapsedHide } = this.props;
        let volume = 1;
        if (set.volume === 1) {
            volume = 0;
        }
        setSetting({volume});
        collapsedHide();
    }

    onLogout = () => {

    }

    render() {

        const { set } = this.props;

        return (
            <div id="mmpop_system_menu" className="mmpop ng-scope system_menu" style={{ top: 60, left: 85}}>
                <ul className="dropdown_menu">
                    <li onClick={this.onNotice}>
                        <a title="关闭桌面通知" className="ng-scope"><i className={`menuicon_push_${set.notice === 1 ? 'on' : 'off'}`}/>{set.notice === 1 ? '关闭桌面通知' : '打开桌面通知'}</a>
                    </li>
                    <li onClick={this.onVolume}>
                       <a title="关闭声音" className="ng-scope"><i className={`menuicon_volume_${set.volume === 1 ? 'on' : 'mute'}`}/>{set.volume === 1 ? '关闭声音' : '打开声音'}</a>
                    </li>
                    <li>
                        <a title="意见反馈"><i className="menuicon_feedback"/>意见反馈</a>
                    </li>
                    <li className="last_child" onClick={this.onLogout}>
                        <a title="退出"><i className="menuicon_quit"/>退出</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(({ set }) => ({ set }), {...require('../../redux/actions/set').default, ...require('../../redux/actions/collapsed').default})(Set);