"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var ListDel = function (_a) {
    var disabled = _a.disabled, icon = _a.icon, name = _a.name, parent = _a.parent, props = tslib_1.__rest(_a, ["disabled", "icon", "name", "parent"]);
    var fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
    var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return (react_1.default.createElement(IconButton_1.default, tslib_1.__assign({ disabled: !limitNotReached, onClick: function () {
            return limitNotReached &&
                parent.onChange([]
                    .concat(parent.value.slice(0, fieldIndex))
                    .concat(parent.value.slice(1 + fieldIndex)));
        } }, uniforms_1.filterDOMProps(props)), icon));
};
ListDel.propTypes = {
    icon: prop_types_1.default.node
};
ListDel.defaultProps = {
    icon: '-'
};
exports.default = uniforms_1.connectField(ListDel, {
    includeParent: true,
    initialValue: false
});
