"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var uniforms_1 = require("uniforms");
var HiddenField = /** @class */ (function (_super) {
    tslib_1.__extends(HiddenField, _super);
    function HiddenField() {
        var _this = _super.apply(this, arguments) || this;
        _this.options = {
            ensureValue: true,
            overrideValue: true
        };
        return _this;
    }
    HiddenField.prototype.componentWillReceiveProps = function (_a) {
        var valueDesired = _a.value;
        if (valueDesired === undefined) {
            return;
        }
        var props = this.getFieldProps();
        if (props.value !== valueDesired) {
            props.onChange(valueDesired);
        }
    };
    HiddenField.prototype.render = function () {
        var props = this.getFieldProps();
        return props.noDOM ? (uniforms_1.nothing) : (react_1.default.createElement("input", tslib_1.__assign({ disabled: props.disabled, id: props.id, name: props.name, ref: props.inputRef, type: "hidden", value: props.value }, uniforms_1.filterDOMProps(props))));
    };
    HiddenField.displayName = 'HiddenField';
    return HiddenField;
}(uniforms_1.BaseField));
exports.default = HiddenField;
