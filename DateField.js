"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
var uniforms_1 = require("uniforms");
var DateConstructor = globalThis.Date;
var dateFormat = function (value) { return value && value.toISOString().slice(0, -8); };
var dateParse = function (timestamp, onChange) {
    var date = new DateConstructor(timestamp);
    if (date.getFullYear() < 10000) {
        onChange(date);
    }
    else if (isNaN(timestamp)) {
        onChange(undefined);
    }
};
var Date = function (_a) {
    var InputLabelProps = _a.InputLabelProps, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, helperText = _a.helperText, inputRef = _a.inputRef, label = _a.label, labelProps = _a.labelProps, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, showInlineError = _a.showInlineError, value = _a.value, props = tslib_1.__rest(_a, ["InputLabelProps", "disabled", "error", "errorMessage", "helperText", "inputRef", "label", "labelProps", "name", "onChange", "placeholder", "showInlineError", "value"]);
    return (react_1.default.createElement(TextField_1.default, tslib_1.__assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, label: label, InputLabelProps: tslib_1.__assign({}, labelProps, InputLabelProps), name: name, onChange: function (event) {
            return disabled || dateParse(event.target.valueAsNumber, onChange);
        }, placeholder: placeholder, ref: inputRef, type: "datetime-local", value: dateFormat(value) }, uniforms_1.filterDOMProps(props))));
};
Date.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Date);
