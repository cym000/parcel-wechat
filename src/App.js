import React, { Component } from 'react';
import { Left } from './components';

class App extends Component {

    render() {
        return (
            <div className="main_inner">
                <Left />
                <div className="right">
                    <div id="chatArea" className="box chat ng-scope no-choose">
                        <div className="box_hd">
                            <div className="title_wrap">
                                <div className="title poi">
                                    <a className="title_name ng-binding" data-username="">崔玲</a>
                                    <i className="web_wechat_down_icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-wrapper box_bd chat_bd scrollbar-dynamic" style={{ position: "absolute"}}>
                            <div className="box_bd chat_bd scrollbar-dynamic scroll-content" style={{marginBottom: 0, marginRight: 0, height: "544px"}}>
                                <div className="ng-scope">
                                    <div className="message_empty ng-scope">
                                        <i className="web_wechat_nomes_icon"/>
                                        <p className="ng-hide">暂时没有新消息</p>
                                        <p className="">未选择聊天</p>
                                    </div>
                                </div>
                                <div className="scroll-element scroll-x">
                                    <div className="scroll-element_corner"/>
                                    <div className="scroll-arrow scroll-arrow_less"/>
                                    <div className="scroll-arrow scroll-arrow_more"/>
                                    <div className="scroll-element_outer">
                                        <div className="scroll-element_size"/>
                                        <div className="scroll-element_inner-wrapper">
                                            <div className="scroll-element_inner scroll-element_track">
                                                <div className="scroll-element_inner-bottom"/>
                                            </div>
                                        </div>
                                        <div className="scroll-bar" style={{ width: 96}}>
                                            <div className="scroll-bar_body">
                                                <div className="scroll-bar_body-inner"/>
                                            </div>
                                            <div className="scroll-bar_bottom"/>
                                            <div className="scroll-bar_center"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="scroll-element scroll-y">
                                    <div className="scroll-element_corner"/>
                                    <div className="scroll-arrow scroll-arrow_less"/>
                                    <div className="scroll-arrow scroll-arrow_more"/>
                                    <div className="scroll-element_outer">
                                        <div className="scroll-element_size"/>
                                        <div className="scroll-element_inner-wrapper">
                                            <div className="scroll-element_inner scroll-element_track">
                                                <div className="scroll-element_inner-bottom"/>
                                            </div>
                                        </div>
                                        <div className="scroll-bar" style={{ height: 96}}>
                                            <div className="scroll-bar_body">
                                                <div className="scroll-bar_body-inner"/>
                                            </div>
                                            <div className="scroll-bar_bottom"/>
                                            <div className="scroll-bar_center"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box_ft ng-scope ng-hide">
                                <div className="toolbar" id="tool_bar">
                                    <a className="web_wechat_face" title="表情"/>
                                    <a title="截屏"/>
                                    <a className="web_wechat_pic js_fileupload ng-isolate-scope webuploader-container"
                                       title="图片和文件">
                                        <div className="webuploader-pick"/>
                                        <div id="rt_rt_1cvhmgsv9min5j9gb914e2p9l1" style={{ position: "absolute", top: 0, left: 0, width: 30, height: 30, overflow: "hidden", bottom: "auto", right: "auto" }}>
                                            <input type="file" name="file" className="webuploader-element-invisible" multiple="multiple"/>
                                            <label style={{ opacity: 0, width: "100%", height: "100%", display: "block", cursor: "pointer", background: "rgb(255, 255, 255)" }}/>
                                        </div>
                                    </a>
                                </div>
                                <div className="content ng-isolate-scope">
                                    <pre id="editArea" className="flex edit_area ng-isolate-scope ng-pristine ng-valid" contentEditable="true"/>
                                    <span className="caret_pos_helper" id="caretPosHelper"/>
                                </div>
                                <div className="action">
                                    <span className="desc ng-scope">按下Ctrl+Enter换行</span>
                                    <a className="btn btn_send">发送</a>
                                </div>
                            </div>
                            <div id="J_CatchDrop" className="catch-drop-area"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;