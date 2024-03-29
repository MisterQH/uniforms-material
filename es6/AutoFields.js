import * as tslib_1 from "tslib";
import PropTypes from 'prop-types';
import { createElement } from 'react';
import AutoField from './AutoField';
const AutoFields = (_a, { uniforms: { schema } }) => {
    var { autoField, element, fields, omitFields } = _a, props = tslib_1.__rest(_a, ["autoField", "element", "fields", "omitFields"]);
    return createElement(element, props, (fields || schema.getSubfields())
        .filter(field => omitFields.indexOf(field) === -1)
        .map(field => createElement(autoField, { key: field, name: field })));
};
AutoFields.contextTypes = AutoField.contextTypes;
AutoFields.propTypes = {
    autoField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fields: PropTypes.arrayOf(PropTypes.string),
    omitFields: PropTypes.arrayOf(PropTypes.string)
};
AutoFields.defaultProps = {
    autoField: AutoField,
    element: 'div',
    omitFields: []
};
export default AutoFields;
