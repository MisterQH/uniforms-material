import * as tslib_1 from "tslib";
import ListMaterial from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import React, { Children } from 'react';
import { connectField, filterDOMProps, joinName } from 'uniforms';
import ListItemField from './ListItemField';
import ListAddField from './ListAddField';
const List = (_a) => {
    var { addIcon, children, dense, initialCount, itemProps, label, name, value } = _a, props = tslib_1.__rest(_a, ["addIcon", "children", "dense", "initialCount", "itemProps", "label", "name", "value"]);
    return [
        React.createElement(ListMaterial, Object.assign({ key: "list", dense: dense, subheader: label ? React.createElement(ListSubheader, { disableSticky: true }, label) : undefined }, filterDOMProps(props)), children
            ? value.map((item, index) => Children.map(children, child => React.cloneElement(child, {
                key: index,
                label: null,
                name: joinName(name, child.props.name && child.props.name.replace('$', index))
            })))
            : value.map((item, index) => (React.createElement(ListItemField, Object.assign({ key: index, label: null, name: joinName(name, index) }, itemProps))))),
        React.createElement(ListAddField, { key: "listAddField", name: `${name}.$`, icon: addIcon, initialCount: initialCount })
    ];
};
List.defaultProps = {
    dense: true
};
export default connectField(List, {
    ensureValue: false,
    includeInChain: false
});
