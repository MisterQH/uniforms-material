import React from 'react';
declare function wrap({ component, disabled, error, errorMessage, fullWidth, helperText, margin, required, showInlineError, variant }: any, ...children: any[]): React.FunctionComponentElement<import("@material-ui/core/OverridableComponent").DefaultComponentProps<{
    props: {
        disabled?: boolean | undefined;
        error?: boolean | undefined;
        fullWidth?: boolean | undefined;
        margin?: "dense" | "none" | "normal" | undefined;
        onBlur?: ((event: any) => void) | undefined;
        onFocus?: ((event: any) => void) | undefined;
        required?: boolean | undefined;
        variant?: "standard" | "outlined" | "filled" | undefined;
    };
    defaultComponent: "div";
    classKey: import("@material-ui/core/FormControl").FormControlClassKey;
}>>;
declare const _default: typeof wrap & {
    _filterDOMProps: (props: any) => Pick<any, number | symbol>;
    _filterDOMPropsList: string[];
};
export default _default;
