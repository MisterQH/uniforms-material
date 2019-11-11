"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormControl_1 = tslib_1.__importDefault(require("@material-ui/core/FormControl"));
var FormHelperText_1 = tslib_1.__importDefault(require("@material-ui/core/FormHelperText"));
var react_1 = tslib_1.__importDefault(require("react"));
var omit_1 = tslib_1.__importDefault(require("lodash/omit"));
var _filterDOMPropsList = ['fullWidth', 'helperText', 'margin', 'variant'];
var _filterDOMProps = function (props) { return omit_1.default(props, _filterDOMPropsList); };
function wrap(_a) {
    var component = _a.component, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, fullWidth = _a.fullWidth, helperText = _a.helperText, margin = _a.margin, required = _a.required, showInlineError = _a.showInlineError, variant = _a.variant;
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    var formHelperText = showInlineError && error ? errorMessage : helperText;
    var props = {
        component: component,
        disabled: !!disabled,
        error: !!error,
        fullWidth: !!fullWidth,
        margin: margin,
        required: required,
        variant: variant
    };
    return react_1.default.createElement.apply(react_1.default, [FormControl_1.default,
        props].concat(children, [!!formHelperText && react_1.default.createElement(FormHelperText_1.default, null, formHelperText)]));
}
exports.default = Object.assign(wrap, { _filterDOMProps: _filterDOMProps, _filterDOMPropsList: _filterDOMPropsList });
