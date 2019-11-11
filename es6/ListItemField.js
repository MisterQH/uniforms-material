import * as tslib_1 from "tslib";
import ListItemMaterial from '@material-ui/core/ListItem';
import React, { Children } from 'react';
import { connectField, joinName } from 'uniforms';
import ListDelField from './ListDelField';
import AutoField from './AutoField';
const ListItem = (_a) => {
    var { dense, divider, disableGutters, removeIcon } = _a, props = tslib_1.__rest(_a, ["dense", "divider", "disableGutters", "removeIcon"]);
    return (React.createElement(ListItemMaterial, { dense: dense, divider: divider, disableGutters: disableGutters },
        props.children ? (Children.map(props.children, child => React.cloneElement(child, {
            name: joinName(props.name, child.props.name),
            label: null
        }))) : (React.createElement(AutoField, Object.assign({}, props))),
        React.createElement(ListDelField, { name: props.name, icon: removeIcon })));
};
ListItem.defaultProps = {
    dense: true
};
export default connectField(ListItem, {
    includeInChain: false,
    includeParent: true
});
