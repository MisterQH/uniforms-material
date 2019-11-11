"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
var uniforms_1 = require("uniforms");
var Text = function (_a) {
    var disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, helperText = _a.helperText, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, showInlineError = _a.showInlineError, type = _a.type, value = _a.value, props = tslib_1.__rest(_a, ["disabled", "error", "errorMessage", "helperText", "inputRef", "label", "name", "onChange", "placeholder", "showInlineError", "type", "value"]);
    return (react_1.default.createElement(TextField_1.default, tslib_1.__assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, label: label, name: name, onChange: function (event) { return disabled || onChange(event.target.value); }, placeholder: placeholder, ref: inputRef, type: type, value: value }, uniforms_1.filterDOMProps(props))));
};
Text.defaultProps = {
    fullWidth: true,
    margin: 'dense',
    type: 'text'
};
exports.default = uniforms_1.connectField(Text);
