import * as tslib_1 from "tslib";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connectField, filterDOMProps } from 'uniforms';
const LongText = (_a) => {
    var { disabled, error, errorMessage, helperText, inputRef, label, name, onChange, placeholder, showInlineError, value } = _a, props = tslib_1.__rest(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "showInlineError", "value"]);
    return (React.createElement(TextField, Object.assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, label: label, multiline: true, name: name, onChange: event => disabled || onChange(event.target.value), placeholder: placeholder, ref: inputRef, value: value }, filterDOMProps(props))));
};
LongText.defaultProps = {
    fullWidth: true,
    margin: 'dense',
    type: 'text'
};
export default connectField(LongText);
