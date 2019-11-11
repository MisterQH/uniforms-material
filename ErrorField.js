"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormControl_1 = tslib_1.__importDefault(require("@material-ui/core/FormControl"));
var FormHelperText_1 = tslib_1.__importDefault(require("@material-ui/core/FormHelperText"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var Error = function (_a) {
    var children = _a.children, error = _a.error, errorMessage = _a.errorMessage, fullWidth = _a.fullWidth, margin = _a.margin, variant = _a.variant, props = tslib_1.__rest(_a, ["children", "error", "errorMessage", "fullWidth", "margin", "variant"]);
    return !error ? (uniforms_1.nothing) : (react_1.default.createElement(FormControl_1.default, { error: !!error, fullWidth: !!fullWidth, margin: margin, variant: variant },
        react_1.default.createElement(FormHelperText_1.default, tslib_1.__assign({}, uniforms_1.filterDOMProps(props)), children || errorMessage)));
};
Error.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Error, { initialValue: false });
