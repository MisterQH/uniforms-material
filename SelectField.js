"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Checkbox_1 = tslib_1.__importDefault(require("@material-ui/core/Checkbox"));
var FormControlLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormControlLabel"));
var FormGroup_1 = tslib_1.__importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormLabel"));
var MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
var Radio_1 = tslib_1.__importDefault(require("@material-ui/core/Radio"));
var RadioGroup_1 = tslib_1.__importDefault(require("@material-ui/core/RadioGroup"));
var react_1 = tslib_1.__importDefault(require("react"));
var Switch_1 = tslib_1.__importDefault(require("@material-ui/core/Switch"));
var TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
var uniforms_1 = require("uniforms");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var xor = function (item, array) {
    var index = array.indexOf(item);
    if (index === -1) {
        return array.concat([item]);
    }
    return array.slice(0, index).concat(array.slice(index + 1));
};
var renderSelect = function (_a) {
    var InputLabelProps = _a.InputLabelProps, allowedValues = _a.allowedValues, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, fieldType = _a.fieldType, fullWidth = _a.fullWidth, helperText = _a.helperText, id = _a.id, inputProps = _a.inputProps, label = _a.label, labelProps = _a.labelProps, margin = _a.margin, name = _a.name, native = _a.native, onChange = _a.onChange, placeholder = _a.placeholder, required = _a.required, showInlineError = _a.showInlineError, transform = _a.transform, value = _a.value, variant = _a.variant, props = tslib_1.__rest(_a, ["InputLabelProps", "allowedValues", "disabled", "error", "errorMessage", "fieldType", "fullWidth", "helperText", "id", "inputProps", "label", "labelProps", "margin", "name", "native", "onChange", "placeholder", "required", "showInlineError", "transform", "value", "variant"]);
    var Item = native ? 'option' : MenuItem_1.default;
    var hasPlaceholder = !!placeholder;
    var hasValue = value !== '' && value !== undefined;
    return (react_1.default.createElement(TextField_1.default, { disabled: !!disabled, error: !!error, fullWidth: fullWidth, helperText: (error && showInlineError && errorMessage) || helperText, InputLabelProps: tslib_1.__assign({ shrink: !!label && (hasPlaceholder || hasValue) }, labelProps, InputLabelProps), label: label, margin: margin, onChange: function (event) {
            return disabled ||
                onChange(event.target.value !== '' ? event.target.value : undefined);
        }, required: required, select: true, SelectProps: tslib_1.__assign({ displayEmpty: hasPlaceholder, inputProps: tslib_1.__assign({ name: name, id: id }, inputProps), multiple: fieldType === Array || undefined, native: native }, uniforms_1.filterDOMProps(props)), value: native && !value ? '' : value, variant: variant },
        (hasPlaceholder || !required || !hasValue) && (react_1.default.createElement(Item, { value: "", disabled: !!required }, placeholder || label)),
        allowedValues.map(function (value) { return (react_1.default.createElement(Item, { key: value, value: value }, transform ? transform(value) : value)); })));
};
var renderCheckboxes = function (_a) {
    var allowedValues = _a.allowedValues, appearance = _a.appearance, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, fieldType = _a.fieldType, id = _a.id, inputRef = _a.inputRef, label = _a.label, legend = _a.legend, name = _a.name, onChange = _a.onChange, showInlineError = _a.showInlineError, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "appearance", "disabled", "error", "errorMessage", "fieldType", "id", "inputRef", "label", "legend", "name", "onChange", "showInlineError", "transform", "value"]);
    var children;
    var filteredProps = wrapField_1.default._filterDOMProps(uniforms_1.filterDOMProps(props));
    if (fieldType !== Array) {
        children = (react_1.default.createElement(RadioGroup_1.default, { id: id, name: name, onChange: function (event) { return disabled || onChange(event.target.value); }, ref: inputRef, value: value }, allowedValues.map(function (item) { return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Radio_1.default, tslib_1.__assign({ id: id + "-" + item }, filteredProps)), key: item, label: transform ? transform(item) : item, value: item })); })));
    }
    else {
        var SelectionControl_1 = appearance === 'checkbox' ? Checkbox_1.default : Switch_1.default;
        children = (react_1.default.createElement(FormGroup_1.default, { id: id }, allowedValues.map(function (item) { return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(SelectionControl_1, tslib_1.__assign({ checked: value.includes(item), id: id + "-" + item, name: name, onChange: function () { return disabled || onChange(xor(item, value)); }, ref: inputRef, value: props.name }, filteredProps)), key: item, label: transform ? transform(item) : item })); })));
    }
    return wrapField_1.default(tslib_1.__assign({}, props, { component: 'fieldset', disabled: disabled,
        error: error,
        errorMessage: errorMessage,
        showInlineError: showInlineError }), (legend || label) && (react_1.default.createElement(FormLabel_1.default, { component: "legend" }, legend || label)), children);
};
var Select = function (_a) {
    var checkboxes = _a.checkboxes, props = tslib_1.__rest(_a, ["checkboxes"]);
    return checkboxes ? renderCheckboxes(props) : renderSelect(props);
};
Select.defaultProps = {
    appearance: 'checkbox',
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Select);
