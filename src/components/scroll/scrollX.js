import React from 'react';

export default () => (
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
);