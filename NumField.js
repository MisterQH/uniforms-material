"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
var uniforms_1 = require("uniforms");
var noneIfNaN = function (x) { return (isNaN(x) ? undefined : x); };
var parse = function (decimal, x) { return noneIfNaN((decimal ? parseFloat : parseInt)(x)); };
var Num_ = function (_a) {
    var decimal = _a.decimal, disabled = _a.disabled, error = _a.error, errorMessage = _a.errorMessage, helperText = _a.helperText, inputProps = _a.inputProps, inputRef = _a.inputRef, label = _a.label, max = _a.max, min = _a.min, name = _a.name, onChange = _a.onChange, placeholder = _a.placeholder, showInlineError = _a.showInlineError, value = _a.value, props = tslib_1.__rest(_a, ["decimal", "disabled", "error", "errorMessage", "helperText", "inputProps", "inputRef", "label", "max", "min", "name", "onChange", "placeholder", "showInlineError", "value"]);
    return (react_1.default.createElement(TextField_1.default, tslib_1.__assign({ disabled: !!disabled, error: !!error, helperText: (error && showInlineError && errorMessage) || helperText, inputProps: tslib_1.__assign({ min: min, max: max, step: decimal ? 0.01 : 1 }, inputProps), label: label, name: name, onChange: onChange, placeholder: placeholder, ref: inputRef, type: "number", value: value }, uniforms_1.filterDOMProps(props))));
};
var Num;
// istanbul ignore next
if (parseInt(react_1.default.version, 10) < 16) {
    Num = /** @class */ (function (_super) {
        tslib_1.__extends(Num, _super);
        function Num() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { value: '' + _this.props.value };
            _this.onChange = function (event) {
                var value = event.target.value.replace(/[^\d.,-]/g, '');
                _this.setState({ value: value });
                _this.props.onChange(parse(_this.props.decimal, value));
            };
            return _this;
        }
        Num.prototype.componentWillReceiveProps = function (_a) {
            var decimal = _a.decimal, value = _a.value;
            if (parse(decimal, value) !==
                parse(decimal, this.state.value.replace(/[.,]+$/, ''))) {
                this.setState({
                    value: value === undefined || value === '' ? '' : '' + value
                });
            }
        };
        Num.prototype.render = function () {
            return Num_(tslib_1.__assign({}, this.props, { onChange: this.onChange, value: this.state.value }));
        };
        return Num;
    }(react_1.Component));
}
else {
    Num = function (props) {
        return Num_(tslib_1.__assign({}, props, { onChange: function (event) {
                props.onChange(parse(props.decimal, event.target.value));
            } }));
    };
}
Num.defaultProps = {
    fullWidth: true,
    margin: 'dense'
};
exports.default = uniforms_1.connectField(Num);
