import * as tslib_1 from "tslib";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import React from 'react';
import { connectField, filterDOMProps, nothing } from 'uniforms';
const Error = (_a) => {
    var { children, error, errorMessage, fullWidth, margin, variant } = _a, props = tslib_1.__rest(_a, ["children", "error", "errorMessage", "fullWidth", "margin", "variant"]);
    return !error ? (nothing) : (React.createElement(FormControl, { error: !!error, fullWidth: !!fullWidth, margin: margin, variant: variant },
        React.createElement(FormHelperText, Object.assign({}, filterDOMProps(props)), children || errorMessage)));
};
Error.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
export default connectField(Error, { initialValue: false });
