"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var react_1 = require("react");
var AutoField_1 = tslib_1.__importDefault(require("./AutoField"));
var AutoFields = function (_a, _b) {
    var schema = _b.uniforms.schema;
    var autoField = _a.autoField, element = _a.element, fields = _a.fields, omitFields = _a.omitFields, props = tslib_1.__rest(_a, ["autoField", "element", "fields", "omitFields"]);
    return react_1.createElement(element, props, (fields || schema.getSubfields())
        .filter(function (field) { return omitFields.indexOf(field) === -1; })
        .map(function (field) { return react_1.createElement(autoField, { key: field, name: field }); }));
};
AutoFields.contextTypes = AutoField_1.default.contextTypes;
AutoFields.propTypes = {
    autoField: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.string]),
    element: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.string]),
    fields: prop_types_1.default.arrayOf(prop_types_1.default.string),
    omitFields: prop_types_1.default.arrayOf(prop_types_1.default.string)
};
AutoFields.defaultProps = {
    autoField: AutoField_1.default,
    element: 'div',
    omitFields: []
};
exports.default = AutoFields;
