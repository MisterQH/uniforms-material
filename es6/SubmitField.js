import * as tslib_1 from "tslib";
import Button from '@material-ui/core/Button';
import React from 'react';
import { BaseField, filterDOMProps } from 'uniforms';
const SubmitField = (_a, { uniforms: { error, state } }) => {
    var { children, disabled, inputRef, label, value } = _a, props = tslib_1.__rest(_a, ["children", "disabled", "inputRef", "label", "value"]);
    return (React.createElement(Button, Object.assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, ref: inputRef, type: "submit", value: value }, filterDOMProps(props)), children || label));
};
SubmitField.contextTypes = BaseField.contextTypes;
SubmitField.defaultProps = { label: 'Submit', variant: 'contained' };
export default SubmitField;
