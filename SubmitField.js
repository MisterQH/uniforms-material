"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var SubmitField = function (_a, _b) {
    var _c = _b.uniforms, error = _c.error, state = _c.state;
    var children = _a.children, disabled = _a.disabled, inputRef = _a.inputRef, label = _a.label, value = _a.value, props = tslib_1.__rest(_a, ["children", "disabled", "inputRef", "label", "value"]);
    return (react_1.default.createElement(Button_1.default, tslib_1.__assign({ disabled: disabled === undefined ? !!(error || state.disabled) : disabled, ref: inputRef, type: "submit", value: value }, uniforms_1.filterDOMProps(props)), children || label));
};
SubmitField.contextTypes = uniforms_1.BaseField.contextTypes;
SubmitField.defaultProps = { label: 'Submit', variant: 'contained' };
exports.default = SubmitField;
