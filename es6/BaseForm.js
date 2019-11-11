import { BaseForm } from 'uniforms';
const Material = (parent) => { var _a; return _a = class extends parent {
    },
    _a.Material = Material,
    _a.displayName = `Material${parent.displayName}`,
    _a; };
export default Material(BaseForm);
