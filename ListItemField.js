"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ListItem_1 = tslib_1.__importDefault(require("@material-ui/core/ListItem"));
var react_1 = tslib_1.__importStar(require("react"));
var uniforms_1 = require("uniforms");
var ListDelField_1 = tslib_1.__importDefault(require("./ListDelField"));
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var ListItem = function (_a) {
    var dense = _a.dense, divider = _a.divider, disableGutters = _a.disableGutters, removeIcon = _a.removeIcon, props = tslib_1.__rest(_a, ["dense", "divider", "disableGutters", "removeIcon"]);
    return (react_1.default.createElement(ListItem_1.default, { dense: dense, divider: divider, disableGutters: disableGutters },
        props.children ? (react_1.Children.map(props.children, function (child) {
            return react_1.default.cloneElement(child, {
                name: uniforms_1.joinName(props.name, child.props.name),
                label: null
            });
        })) : (react_1.default.createElement(AutoField_1.default, tslib_1.__assign({}, props))),
        react_1.default.createElement(ListDelField_1.default, { name: props.name, icon: removeIcon })));
};
ListItem.defaultProps = {
    dense: true
};
exports.default = uniforms_1.connectField(ListItem, {
    includeInChain: false,
    includeParent: true
});
