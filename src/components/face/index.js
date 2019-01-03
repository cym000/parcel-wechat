import React, { Component } from 'react';
import { qqFace, emojiFace } from '../../util';
import map from 'lodash/map';
import space from '../../../static/images/spacer.gif';

class Face extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: "qq_face"
        };
    }

    componentDidMount() {
        document.onclick = (e) => {
            const dom = e.target;
            const mmpop = document.querySelector(".mmpop");
            if (mmpop && !mmpop.contains(dom)) {
                const { onChange } = this.props;
                onChange({ show: false });
            }
        };
    }

    onChangeTab = (key) => {
        const { selectedKey } = this.state;
        if (key !== selectedKey) {
            this.setState({selectedKey: key});
        }
    }

    onFace = (face) => {
        const { callback } = this.props;
        const { key, name } = face;
        if (callback) {
            let number = key.substr(6);
            let content = `<img class="qqemoji qqemoji${number}" data-text="[${name}]_web" src="${space}"/>`;
            callback(content);
        }
    }

    onEmoji = (face) => {
        const { callback } = this.props;
        const { key, name, type } = face;
        if (callback) {
            let number = parseInt(key.substr(5));
            let content = `<img class="${type === 'qq' ? 'qqemoji' : 'emoji'} emoji1f${number}" data-text="[${name}]_web" src="${space}"/>`;
            callback(content);
        }
    }

    componentWillUnmount() {
        document.onclick = null;
    }

    render() {

        const { selectedKey } = this.state;

        return (
            <div className="mmpop ng-scope slide-top" tabIndex="-1" style={{ top: -272, left: 15 }}>
                <div className="expression">
                    <ul className="exp_hd">
                        <li className={selectedKey === "qq_face" ? "exp_hd_item active" : "exp_hd_item"} onClick={() => this.onChangeTab("qq_face")}>
                            <a>QQ表情</a>
                        </li>
                        <li className={selectedKey === "emoji_face" ? "exp_hd_item active" : "exp_hd_item"} onClick={() => this.onChangeTab("emoji_face")}>
                            <a>符号表情</a>
                        </li>
                    </ul>
                    <div className="scroll-wrapper exp_bd scrollbar-dynamic" style={{ position: "relative" }}>
                        <div className="exp_bd scrollbar-dynamic scroll-content" style={{ marginBottom: 0, marginRight: 0 }}>
                            <div className="exp_cont">
                                <div className={selectedKey}>
                                    {
                                        selectedKey === "qq_face" &&
                                        map(qqFace, face =>  <a key={face.key} title={face.name} type={face.type} className={`face ${face.key}`} onClick={() => this.onFace(face)}>{face.name}</a>)
                                    }
                                    {
                                        selectedKey === "emoji_face" &&
                                        map(emojiFace, face =>  <a key={face.key} title={face.name} type={face.type} className={`face ${face.key}`} onClick={() => this.onEmoji(face)}>{face.name}</a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Face;