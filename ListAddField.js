"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormControl_1 = tslib_1.__importDefault(require("@material-ui/core/FormControl"));
var IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = tslib_1.__importDefault(require("react"));
var cloneDeep_1 = tslib_1.__importDefault(require("lodash/cloneDeep"));
var uniforms_1 = require("uniforms");
var ListAdd = function (_a) {
    var disabled = _a.disabled, fullWidth = _a.fullWidth, icon = _a.icon, margin = _a.margin, parent = _a.parent, value = _a.value, variant = _a.variant, props = tslib_1.__rest(_a, ["disabled", "fullWidth", "icon", "margin", "parent", "value", "variant"]);
    var limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (react_1.default.createElement(FormControl_1.default, { fullWidth: !!fullWidth, margin: margin, variant: variant },
        react_1.default.createElement(IconButton_1.default, tslib_1.__assign({ disabled: !limitNotReached, onClick: function () {
                return limitNotReached &&
                    parent.onChange(parent.value.concat([cloneDeep_1.default(value)]));
            } }, uniforms_1.filterDOMProps(props)), icon)));
};
ListAdd.propTypes = {
    icon: prop_types_1.default.node
};
ListAdd.defaultProps = {
    fullWidth: true,
    icon: '+',
    margin: 'dense'
};
exports.default = uniforms_1.connectField(ListAdd, {
    includeParent: true,
    initialValue: false
});
