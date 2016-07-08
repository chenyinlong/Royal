/**
 * @type FormControls Component
 * @desc 多选框
 * @author Jafeney
 * @dateTime 2016-07-07
 **/

import React, { Component } from 'react'
import './style.less'

class Checkbox extends Component {

    constructor(props) {
        super(props)
        this.text = props.text || null;
        this.wrapStyle = props.wrapStyle || null;
        this.wrapClass = props.wrapClass || null;
        this.textStyle = props.textStyle || null;
        this.textClass = props.textClass || null;
        this.style = props.style || null;
        this.className = props.className || null;
        this.onConfirm = props.onConfirm || null;
        this.onCancel = props.onCancel || null;
        this.disabled = props.disabled || false;
        this.checked = props.checked || false;
        this.state = {
            checked: this.checked
        }
        console.log(this.state.checked);
    }

    onToggle() {
        this.setState({ checked: !this.state.checked })
        if (this.state.checked) {
            this.onCancel && this.onCancel()
        } else {
            this.onConfirm && this.onConfirm()
        }
    }

    render() {
        let _className = this.className ? "ry-checkbox" + this.className : "ry-checkbox";
        _className = this.state.checked ? _className + " ry-checked" : _className;
        return (
            <label className={ "ry-checkbox-wrapper " + (this.wrapClass ? this.wrapClass : '') + (this.disabled ? " ry-disabled" : '') } style={ this.wrapStyle } >
                <span className={ _className }>
                    <span className={ "ry-checkbox-inner " + (this.className ? this.className : '') } style={ this.style }></span>
                    <input type="checkbox" value="on" onClick={()=> !this.disabled && this.onToggle() } disabled={this.disabled} className="ry-checkbox-input"  />
                </span>
                <span className={ "ry-checkbox-text " + (this.textClass ? this.textClass : '') } style={ this.textStyle }>{ this.text }</span>
            </label>
        );
    }
}

export default Checkbox
