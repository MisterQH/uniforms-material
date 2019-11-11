import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connectField, filterDOMProps } from 'uniforms';
const noneIfNaN = x => (isNaN(x) ? undefined : x);
const parse = (decimal, x) => noneIfNaN((decimal ? parseFloat : parseInt)(x));
const Num_ = (_a) => {
    var { decimal, disabled, error, errorMessage, helperText, inputProps, inputRef, label, max, min, name, onChange, placeholder, showInlineError, value } = _a, props = tslib_1.__rest(_a, ["decimal", "disabled", "error", "errorMessage", "helperText", "inputProps", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "showInlineError", "value"]);
    return (React.createElement(TextField, Object.assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, inputProps: Object.assign({ min, max, step: decimal ? 0.01 : 1 }, inputProps), label: label, name: name, onChange: onChange, placeholder: placeholder, ref: inputRef, type: "number", value: value }, filterDOMProps(props))));
};
let Num;
// istanbul ignore next
if (parseInt(React.version, 10) < 16) {
    Num = class Num extends Component {
        constructor() {
            super(...arguments);
            this.state = { value: '' + this.props.value };
            this.onChange = event => {
                const value = event.target.value.replace(/[^\d.,-]/g, '');
                this.setState({ value });
                this.props.onChange(parse(this.props.decimal, value));
            };
        }
        componentWillReceiveProps({ decimal, value }) {
            if (parse(decimal, value) !==
                parse(decimal, this.state.value.replace(/[.,]+$/, ''))) {
                this.setState({
                    value: value === undefined || value === '' ? '' : '' + value
                });
            }
        }
        render() {
            return Num_(Object.assign({}, this.props, { onChange: this.onChange, value: this.state.value }));
        }
    };
}
else {
    Num = props => Num_(Object.assign({}, props, { onChange(event) {
            props.onChange(parse(props.decimal, event.target.value));
        } }));
}
Num.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
export default connectField(Num);
