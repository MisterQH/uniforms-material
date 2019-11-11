/// <reference types="react" />
declare const SubmitField: {
    ({ children, disabled, inputRef, label, value, ...props }: {
        [x: string]: any;
        children: any;
        disabled: any;
        inputRef: any;
        label: any;
        value: any;
    }, { uniforms: { error, state } }: {
        uniforms: {
            error: any;
            state: any;
        };
    }): JSX.Element;
    contextTypes: {
        uniforms: any;
    };
    defaultProps: {
        label: string;
        variant: string;
    };
};
export default SubmitField;
