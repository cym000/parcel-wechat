import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';

class RightHead extends Component {
    render() {

        const { friend } = this.props;

        return (
            <div className="box_hd">
                <div className="title_wrap">
                    <div className="title poi">
                        {
                            friend.name && <a className="title_name ng-binding">{ friend.name }</a>
                        }
                        {
                            friend.name && <i className="web_wechat_down_icon"/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

RightHead.defaultProps = {
    friend: {
        // name: "崔玲"
    }
};

export default RightHead;