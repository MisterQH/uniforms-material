"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormControlLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormControlLabel"));
var FormLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormLabel"));
var RadioGroup_1 = tslib_1.__importDefault(require("@material-ui/core/RadioGroup"));
var Radio_1 = tslib_1.__importDefault(require("@material-ui/core/Radio"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var Radio = function (_a) {
    var allowedValues = _a.allowedValues, checkboxes = _a.checkboxes, // eslint-disable-line no-unused-vars
    disabled = _a.disabled, id = _a.id, inputRef = _a.inputRef, label = _a.label, name = _a.name, onChange = _a.onChange, transform = _a.transform, value = _a.value, props = tslib_1.__rest(_a, ["allowedValues", "checkboxes", "disabled", "id", "inputRef", "label", "name", "onChange", "transform", "value"]);
    var filteredProps = wrapField_1.default._filterDOMProps(uniforms_1.filterDOMProps(props));
    return wrapField_1.default(tslib_1.__assign({}, props, { disabled: disabled, component: 'fieldset' }), label && (react_1.default.createElement(FormLabel_1.default, { component: "legend", htmlFor: name }, label)), react_1.default.createElement(RadioGroup_1.default, { id: id, name: name, onChange: function (event) { return disabled || onChange(event.target.value); }, ref: inputRef, value: value }, allowedValues.map(function (item) { return (react_1.default.createElement(FormControlLabel_1.default, { control: react_1.default.createElement(Radio_1.default, tslib_1.__assign({}, filteredProps)), key: item, label: transform ? transform(item) : item, value: "" + item })); })));
};
Radio.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Radio);
