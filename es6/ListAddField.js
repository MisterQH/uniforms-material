import * as tslib_1 from "tslib";
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { connectField, filterDOMProps } from 'uniforms';
const ListAdd = (_a) => {
    var { disabled, fullWidth, icon, margin, parent, value, variant } = _a, props = tslib_1.__rest(_a, ["disabled", "fullWidth", "icon", "margin", "parent", "value", "variant"]);
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);
    return (React.createElement(FormControl, { fullWidth: !!fullWidth, margin: margin, variant: variant },
        React.createElement(IconButton, Object.assign({ disabled: !limitNotReached, onClick: () => limitNotReached &&
                parent.onChange(parent.value.concat([cloneDeep(value)])) }, filterDOMProps(props)), icon)));
};
ListAdd.propTypes = {
    icon: PropTypes.node
};
ListAdd.defaultProps = {
    fullWidth: true,
    icon: '+',
    margin: 'dense'
};
export default connectField(ListAdd, {
    includeParent: true,
    initialValue: false
});
