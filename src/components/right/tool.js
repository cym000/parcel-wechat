import React, { Component } from 'react';
import Face from '../face';

class Tool extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            focusIndex: 0
        };
    }

    onShow = () => {
        this.setState({show: true});
    }

    onBlur = () => {
        const dom = document.querySelector("#editArea");
        console.log(this.getPosition(dom));
    }

    onChange = (params = {}) => {
        this.setState(params);
    }

    onCallBack = (face) => {
        const dom = document.querySelector("#editArea");
        // document.querySelector("#editArea").innerHTML = text + face;
        // this.insertText(dom, face);
        dom.innerHTML += face;
    }

    // 在dom元素的当前光标位置插入文本
    insertText = (dom, str) => {
        const cursPos = this.TraceCursorPosition(dom); // 获取光标位置
        console.log(cursPos);
        dom.innerHTML = dom.innerHTML.slice(0, cursPos.start) + str + dom.innerHTML.slice(cursPos.end)
    }

    // 跟踪光标位置
    TraceCursorPosition = (dom) => {
        const cursPos = this.getPosition(dom);
        return cursPos;
    }

    getPosition = (dom) => {
        let cursorPos = 0;
        if (document.selection) {//IE
            var selectRange = document.selection.createRange();
            selectRange.moveStart('character', -dom.innerHTML.length);
            cursorPos = selectRange.text.length;
        } else if (dom.selectionStart || dom.selectionStart === '0') {
            cursorPos = dom.selectionStart;
        }
        return cursorPos;
    }

    // 返回光标所在位置
    // getPosition = (dom) => {
    //     let start = 0;
    //     let end = 0;
    //     //如果是Firefox(1.5)的话，方法很简单
    //     if (typeof (dom.selectionStart) === "number") {
    //         start = dom.selectionStart;
    //         end = dom.selectionEnd;
    //     } else if (document.selection) {
    //         //下面是IE(6.0)的方法，麻烦得很，还要计算上’\n’
    //         let range = document.selection.createRange();
    //         if (range.parentElement().id === dom.id) {
    //             // create a selection of the whole textarea
    //             let rangeAll = document.body.createTextRange();
    //             rangeAll.moveToElementText(dom);
    //             //两个range，一个是已经选择的text(range)，一个是整个textarea(range_all)
    //             //range_all.compareEndPoints()比较两个端点，如果range_all比range更往左(further to the left)，则
    //             //返回小于0的值，则range_all往右移一点，直到两个range的start相同。
    //             // calculate selection start point by moving beginning of range_all to beginning of range
    //             for (start = 0; rangeAll.compareEndPoints("StartToStart", range) < 0; start++)
    //                 rangeAll.moveStart('character', 1);
    //             // get number of line breaks from textarea start to selection start and add them to start
    //             // 计算一下\n
    //             for (let i = 0; i <= start; i++) {
    //                 if (dom.value.charAt(i) === '\n')
    //                     start++;
    //             }
    //             // create a selection of the whole textarea
    //             rangeAll = document.body.createTextRange();
    //             rangeAll.moveToElementText(dom);
    //             // calculate selection end point by moving beginning of range_all to end of range
    //             for (end = 0; rangeAll.compareEndPoints('StartToEnd', range) < 0; end++) {
    //                 rangeAll.moveStart('character', 1);
    //             }
    //             // get number of line breaks from textarea start to selection end and add them to end
    //             for (let i = 0; i <= end; i++) {
    //                 if (dom.value.charAt(i) === '\n')
    //                     end++;
    //             }
    //         }
    //     }
    //     //return [start, end]; // 包括选中区域的起始位置
    //     // modified to return as Object
    //     return { 'start': start, 'end': end, 'item': [start, end] };
    // }

    render() {

        const { show } = this.state;

        return (
            <div className="box_ft ng-scope">
                <div className="toolbar" id="tool_bar">
                    <a className="web_wechat_face" title="表情" onClick={this.onShow}/>
                    <a title="截屏" className="web_wechat_screencut ng-isolate-scope"/>
                    <a className="web_wechat_pic js_fileupload ng-isolate-scope webuploader-container" title="图片和文件">
                        <div className="webuploader-pick"/>
                        <div id="upload">
                            <input type="file" name="file" className="webuploader-element-invisible" multiple="multiple"/>
                            <label className="upload-label"/>
                        </div>
                    </a>
                    {
                        show && <Face onChange={this.onChange} callback={this.onCallBack}/>
                    }
                </div>
                <div className="content ng-isolate-scope">
                    <pre id="editArea" onBlur={this.onBlur} className="flex edit_area ng-isolate-scope ng-pristine ng-valid" contentEditable/>
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