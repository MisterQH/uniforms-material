/// <reference types="react" />
declare const ErrorsField: {
    ({ children, fullWidth, margin, variant, ...props }: {
        [x: string]: any;
        children: any;
        fullWidth: any;
        margin: any;
        variant: any;
    }, { uniforms: { error, schema } }: {
        uniforms: {
            error: any;
            schema: any;
        };
    }): JSX.Element | null;
    contextTypes: {
        uniforms: any;
    };
    defaultProps: {
        fullWidth: boolean;
        margin: string;
    };
};
export default ErrorsField;
