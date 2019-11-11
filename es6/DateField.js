import * as tslib_1 from "tslib";
import React from "react";
import TextField from "@material-ui/core/TextField";
import { connectField, filterDOMProps } from "uniforms";
var DateConstructor = global.Date;
const dateFormat = value => value && value.toISOString().slice(0, -8);
const dateParse = (timestamp, onChange) => {
  const date = new DateConstructor(timestamp);
  if (date.getFullYear() < 10000) {
    onChange(date);
  } else if (isNaN(timestamp)) {
    onChange(undefined);
  }
};
const Date = _a => {
  var {
      InputLabelProps,
      disabled,
      error,
      errorMessage,
      helperText,
      inputRef,
      label,
      labelProps,
      name,
      onChange,
      placeholder,
      showInlineError,
      value
    } = _a,
    props = tslib_1.__rest(_a, [
      "InputLabelProps",
      "disabled",
      "error",
      "errorMessage",
      "helperText",
      "inputRef",
      "label",
      "labelProps",
      "name",
      "onChange",
      "placeholder",
      "showInlineError",
      "value"
    ]);
  return React.createElement(
    TextField,
    Object.assign(
      {
        disabled: !!disabled,
        error: !!error,
        helperText: (error && showInlineError && errorMessage) || helperText,
        label: label,
        InputLabelProps: Object.assign({}, labelProps, InputLabelProps),
        name: name,
        onChange: event =>
          disabled || dateParse(event.target.valueAsNumber, onChange),
        placeholder: placeholder,
        ref: inputRef,
        type: "datetime-local",
        value: dateFormat(value)
      },
      filterDOMProps(props)
    )
  );
};
Date.defaultProps = {
  fullWidth: true,
  margin: "dense"
};
export default connectField(Date);
