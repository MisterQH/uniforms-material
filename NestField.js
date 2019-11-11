"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var FormLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormLabel"));
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var wrapField_1 = tslib_1.__importDefault(require("./wrapField"));
var Nest = function (_a) {
    var children = _a.children, fields = _a.fields, itemProps = _a.itemProps, label = _a.label, name = _a.name, props = tslib_1.__rest(_a, ["children", "fields", "itemProps", "label", "name"]);
    return wrapField_1.default(tslib_1.__assign({}, props, { component: undefined }), label && react_1.default.createElement(FormLabel_1.default, { component: "legend" }, label), children
        ? uniforms_1.injectName(name, children)
        : fields.map(function (key) { return (react_1.default.createElement(AutoField_1.default, tslib_1.__assign({ key: key, name: uniforms_1.joinName(name, key) }, itemProps))); }));
};
Nest.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Nest, {
    ensureValue: false,
    includeInChain: false
});
