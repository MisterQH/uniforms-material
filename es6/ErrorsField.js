import * as tslib_1 from "tslib";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import { BaseField, filterDOMProps, nothing } from 'uniforms';
const ErrorsField = (_a, { uniforms: { error, schema } }) => {
    var { children, fullWidth, margin, variant } = _a, props = tslib_1.__rest(_a, ["children", "fullWidth", "margin", "variant"]);
    return !error && !children ? (nothing) : (React.createElement(FormControl, { error: !!error, fullWidth: !!fullWidth, margin: margin, variant: variant },
        !!children && (React.createElement(FormHelperText, Object.assign({}, filterDOMProps(props)), children)),
        schema.getErrorMessages(error).map((message, index) => (React.createElement(FormHelperText, Object.assign({ key: index }, filterDOMProps(props)), message)))));
};
ErrorsField.contextTypes = BaseField.contextTypes;
ErrorsField.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
export default ErrorsField;
