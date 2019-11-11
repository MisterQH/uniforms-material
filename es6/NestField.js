import * as tslib_1 from "tslib";
import FormLabel from '@material-ui/core/FormLabel';
import React from 'react';
import { connectField, injectName, joinName } from 'uniforms';
import AutoField from './AutoField';
import wrapField from './wrapField';
const Nest = (_a) => {
    var { children, fields, itemProps, label, name } = _a, props = tslib_1.__rest(_a, ["children", "fields", "itemProps", "label", "name"]);
    return wrapField(Object.assign({}, props, { component: undefined }), label && React.createElement(FormLabel, { component: "legend" }, label), children
        ? injectName(name, children)
        : fields.map(key => (React.createElement(AutoField, Object.assign({ key: key, name: joinName(name, key) }, itemProps)))));
};
Nest.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
export default connectField(Nest, {
    ensureValue: false,
    includeInChain: false
});
