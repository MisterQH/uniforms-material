/// <reference types="react" />
import { BaseField } from 'uniforms';
export default class AutoField extends BaseField {
    static displayName: string;
    getChildContextName(): any;
    render(): import("react").ComponentElement<any, import("react").Component<any, any, any>>;
}
