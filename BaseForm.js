"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uniforms_1 = require("uniforms");
var Material = function (parent) { var _a; return _a = /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_1;
    }(parent)),
    _a.Material = Material,
    _a.displayName = "Material" + parent.displayName,
    _a; };
exports.default = Material(uniforms_1.BaseForm);
