import * as tslib_1 from "tslib";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { connectField, filterDOMProps } from 'uniforms';
import wrapField from './wrapField';
const xor = (item, array) => {
    const index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }
    return array.slice(0, index).concat(array.slice(index + 1));
};
const renderSelect = (_a) => {
    var { InputLabelProps, allowedValues, disabled, error, errorMessage, fieldType, fullWidth, helperText, id, inputProps, label, labelProps, margin, name, native, onChange, placeholder, required, showInlineError, transform, value, variant } = _a, props = tslib_1.__rest(_a, ["InputLabelProps", "allowedValues", "disabled", "error", "errorMessage", "fieldType", "fullWidth", "helperText", "id", "inputProps", "label", "labelProps", "margin", "name", "native", "onChange", "placeholder", "required", "showInlineError", "transform", "value", "variant"]);
    const Item = native ? 'option' : MenuItem;
    const hasPlaceholder = !!placeholder;
    const hasValue = value !== '' && value !== undefined;
    return (React.createElement(TextField, { disabled: !!disabled, error: !!error, fullWidth: fullWidth, helperText: (error && showInlineError && errorMessage) || helperText, InputLabelProps: Object.assign({ shrink: !!label && (hasPlaceholder || hasValue) }, labelProps, InputLabelProps), label: label, margin: margin, onChange: event => disabled ||
            onChange(event.target.value !== '' ? event.target.value : undefined), required: required, select: true, SelectProps: Object.assign({ displayEmpty: hasPlaceholder, inputProps: Object.assign({ name, id }, inputProps), multiple: fieldType === Array || undefined, native }, filterDOMProps(props)), value: native && !value ? '' : value, variant: variant },
        (hasPlaceholder || !required || !hasValue) && (React.createElement(Item, { value: "", disabled: !!required }, placeholder || label)),
        allowedValues.map(value => (React.createElement(Item, { key: value, value: value }, transform ? transform(value) : value)))));
};
const renderCheckboxes = (_a) => {
    var { allowedValues, appearance, disabled, error, errorMessage, fieldType, id, inputRef, label, legend, name, onChange, showInlineError, transform, value } = _a, props = tslib_1.__rest(_a, ["allowedValues", "appearance", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "legend", "name", "onChange", "showInlineError", "transform", "value"]);
    let children;
    const filteredProps = wrapField._filterDOMProps(filterDOMProps(props));
    if (fieldType !== Array) {
        children = (React.createElement(RadioGroup, { id: id, name: name, onChange: (event) => disabled || onChange(event.target.value), ref: inputRef, value: value }, allowedValues.map(item => (React.createElement(FormControlLabel, { control: React.createElement(Radio, Object.assign({ id: `${id}-${item}` }, filteredProps)), key: item, label: transform ? transform(item) : item, value: item })))));
    }
    else {
        const SelectionControl = appearance === 'checkbox' ? Checkbox : Switch;
        children = (React.createElement(FormGroup, { id: id }, allowedValues.map(item => (React.createElement(FormControlLabel, { control: React.createElement(SelectionControl, Object.assign({ checked: value.includes(item), id: `${id}-${item}`, name: name, onChange: () => disabled || onChange(xor(item, value)), ref: inputRef, value: props.name }, filteredProps)), key: item, label: transform ? transform(item) : item })))));
    }
    return wrapField(Object.assign({}, props, { component: 'fieldset', disabled,
        error,
        errorMessage,
        showInlineError }), (legend || label) && (React.createElement(FormLabel, { component: "legend" }, legend || label)), children);
};
const Select = (_a) => {
    var { checkboxes } = _a, props = tslib_1.__rest(_a, ["checkboxes"]);
    return checkboxes ? renderCheckboxes(props) : renderSelect(props);
};
Select.defaultProps = {
    appearance: 'checkbox',
    fullWidth: true,
    margin: 'dense'
};
export default connectField(Select);
