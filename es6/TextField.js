import * as tslib_1 from "tslib";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connectField, filterDOMProps } from 'uniforms';
const Text = (_a) => {
    var { disabled, error, errorMessage, helperText, inputRef, label, name, onChange, placeholder, showInlineError, type, value } = _a, props = tslib_1.__rest(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "showInlineError", "type", "value"]);
    return (React.createElement(TextField, Object.assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, label: label, name: name, onChange: event => disabled || onChange(event.target.value), placeholder: placeholder, ref: inputRef, type: type, value: value }, filterDOMProps(props))));
};
Text.defaultProps = {
    fullWidth: true,
    margin: 'dense',
    type: 'text'
};
export default connectField(Text);
