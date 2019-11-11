"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var List_1 = tslib_1.__importDefault(require("@material-ui/core/List"));
var ListSubheader_1 = tslib_1.__importDefault(require("@material-ui/core/ListSubheader"));
var react_1 = tslib_1.__importStar(require("react"));
var uniforms_1 = require("uniforms");
var ListItemField_1 = tslib_1.__importDefault(require("./ListItemField"));
var ListAddField_1 = tslib_1.__importDefault(require("./ListAddField"));
var List = function (_a) {
    var addIcon = _a.addIcon, children = _a.children, dense = _a.dense, initialCount = _a.initialCount, itemProps = _a.itemProps, label = _a.label, name = _a.name, value = _a.value, props = tslib_1.__rest(_a, ["addIcon", "children", "dense", "initialCount", "itemProps", "label", "name", "value"]);
    return [
        react_1.default.createElement(List_1.default, tslib_1.__assign({ key: "list", dense: dense, subheader: label ? react_1.default.createElement(ListSubheader_1.default, { disableSticky: true }, label) : undefined }, uniforms_1.filterDOMProps(props)), children
            ? value.map(function (item, index) {
                return react_1.Children.map(children, function (child) {
                    return react_1.default.cloneElement(child, {
                        key: index,
                        label: null,
                        name: uniforms_1.joinName(name, child.props.name && child.props.name.replace('$', index))
                    });
                });
            })
            : value.map(function (item, index) { return (react_1.default.createElement(ListItemField_1.default, tslib_1.__assign({ key: index, label: null, name: uniforms_1.joinName(name, index) }, itemProps))); })),
        react_1.default.createElement(ListAddField_1.default, { key: "listAddField", name: name + ".$", icon: addIcon, initialCount: initialCount })
    ];
};
List.defaultProps = {
    dense: true
};
exports.default = uniforms_1.connectField(List, {
    ensureValue: false,
    includeInChain: false
});
