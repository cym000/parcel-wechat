import React, { Component } from 'react';

class Tool extends Component {
    render() {
        return (
            <div className="box_ft ng-scope">
                <div className="toolbar" id="tool_bar">
                    <a className="web_wechat_face" title="表情"/>
                    <a title="截屏" className="web_wechat_screencut ng-isolate-scope"/>
                    <a className="web_wechat_pic js_fileupload ng-isolate-scope webuploader-container"
                       title="图片和文件">
                        <div className="webuploader-pick"/>
                        <div id="upload">
                            <input type="file" name="file" className="webuploader-element-invisible" multiple="multiple"/>
                            <label className="upload-label"/>
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
        )
    }
}

export default Tool;