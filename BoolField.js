"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Checkbox_1 = tslib_1.__importDefault(require("@material-ui/core/Checkbox"));
var FormControlLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormControlLabel"));
var FormGroup_1 = tslib_1.__importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormLabel"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = tslib_1.__importDefault(require("react"));
var Switch_1 = tslib_1.__importDefault(require("@material-ui/core/Switch"));
var uniforms_1 = require("uniforms");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var Bool = function (_a) {
    var appearance = _a.appearance, disabled = _a.disabled, inputRef = _a.inputRef, label = _a.label, legend = _a.legend, name = _a.name, onChange = _a.onChange, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["appearance", "disabled", "inputRef", "label", "legend", "name", "onChange", "transform", "value"]);
    var SelectionControl = appearance === 'checkbox' ? Checkbox_1.default : Switch_1.default;
    var filteredProps = wrapField_1.default._filterDOMProps(uniforms_1.filterDOMProps(props));
    return wrapField_1.default(tslib_1.__assign({}, props, { component: 'fieldset', disabled: disabled }), legend && (react_1.default.createElement(FormLabel_1.default, { component: "legend", htmlFor: name }, legend)), react_1.default.createElement(FormGroup_1.default, null,
        react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(SelectionControl, tslib_1.__assign({ checked: !!value, name: name, onChange: function (event) { return disabled || onChange(event.target.checked); }, ref: inputRef, value: name }, filteredProps)), label: transform ? transform(label) : label })));
};
Bool.defaultProps = {
    appearance: 'checkbox',
    fullWidth: true,
    margin: 'dense'
};
Bool.propTypes = {
    appearance: prop_types_1.default.oneOf(['toggle', 'checkbox'])
};
exports.default = uniforms_1.connectField(Bool);
