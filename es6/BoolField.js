import * as tslib_1 from "tslib";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import PropTypes from 'prop-types';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const Bool = (_a) => {
    var { appearance, disabled, inputRef, label, legend, name, onChange, transform, value } = _a, props = tslib_1.__rest(_a, ["appearance", "disabled", "inputRef", "label", "legend", "name", "onChange", "transform", "value"]);
    const SelectionControl = appearance === 'checkbox' ? Checkbox : Switch;
    const filteredProps = wrapField._filterDOMProps(filterDOMProps(props));
    return wrapField(Object.assign({}, props, { component: 'fieldset', disabled }), legend && (React.createElement(FormLabel, { component: "legend", htmlFor: name }, legend)), React.createElement(FormGroup, null,
        React.createElement(FormControlLabel, { control: React.createElement(SelectionControl, Object.assign({ checked: !!value, name: name, onChange: event => disabled || onChange(event.target.checked), ref: inputRef, value: name }, filteredProps)), label: transform ? transform(label) : label })));
};
Bool.defaultProps = {
    appearance: 'checkbox',
    fullWidth: true,
    margin: 'dense'
};
Bool.propTypes = {
    appearance: PropTypes.oneOf(['toggle', 'checkbox'])
};
export default connectField(Bool);
