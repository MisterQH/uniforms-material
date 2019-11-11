import * as tslib_1 from "tslib";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioMaterial from '@material-ui/core/Radio';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const Radio = (_a) => {
    var { allowedValues, checkboxes, // eslint-disable-line no-unused-vars
    disabled, id, inputRef, label, name, onChange, transform, value } = _a, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "id", "inputRef", "label", "name", "onChange", "transform", "value"]);
    const filteredProps = wrapField._filterDOMProps(filterDOMProps(props));
    return wrapField(Object.assign({}, props, { disabled, component: 'fieldset' }), label && (React.createElement(FormLabel, { component: "legend", htmlFor: name }, label)), React.createElement(RadioGroup, { id: id, name: name, onChange: (event) => disabled || onChange(event.target.value), ref: inputRef, value: value }, allowedValues.map(item => (React.createElement(FormControlLabel, { control: React.createElement(RadioMaterial, Object.assign({}, filteredProps)), key: item, label: transform ? transform(item) : item, value: `${item}` })))));
};
Radio.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
export default connectField(Radio);
