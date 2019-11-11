import * as tslib_1 from "tslib";
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import { connectField, filterDOMProps } from 'uniforms';
const ListDel = (_a) => {
    var { disabled, icon, name, parent } = _a, props = tslib_1.__rest(_a, ["disabled", "icon", "name", "parent"]);
    const fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
    const limitNotReached = !disabled && !(parent.minCount >= parent.value.length);
    return (React.createElement(IconButton, Object.assign({ disabled: !limitNotReached, onClick: () => limitNotReached &&
            parent.onChange([]
                .concat(parent.value.slice(0, fieldIndex))
                .concat(parent.value.slice(1 + fieldIndex))) }, filterDOMProps(props)), icon));
};
ListDel.propTypes = {
    icon: PropTypes.node
};
ListDel.defaultProps = {
    icon: '-'
};
export default connectField(ListDel, {
    includeParent: true,
    initialValue: false
});
