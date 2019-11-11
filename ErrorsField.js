"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormControl_1 = tslib_1.__importDefault(require("@material-ui/core/FormControl"));
var FormHelperText_1 = tslib_1.__importDefault(require("@material-ui/core/FormHelperText"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var ErrorsField = function (_a, _b) {
    var _c = _b.uniforms, error = _c.error, schema = _c.schema;
    var children = _a.children, fullWidth = _a.fullWidth, margin = _a.margin, variant = _a.variant, props = tslib_1.__rest(_a, ["children", "fullWidth", "margin", "variant"]);
    return !error && !children ? (uniforms_1.nothing) : (react_1.default.createElement(FormControl_1.default, { error: !!error, fullWidth: !!fullWidth, margin: margin, variant: variant },
        !!children && (react_1.default.createElement(FormHelperText_1.default, tslib_1.__assign({}, uniforms_1.filterDOMProps(props)), children)),
        schema.getErrorMessages(error).map(function (message, index) { return (react_1.default.createElement(FormHelperText_1.default, tslib_1.__assign({ key: index }, uniforms_1.filterDOMProps(props)), message)); })));
};
ErrorsField.contextTypes = uniforms_1.BaseField.contextTypes;
ErrorsField.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = ErrorsField;
