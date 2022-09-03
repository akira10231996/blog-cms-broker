import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import FormErrors from 'src/view/shared/form/formErrors';
import MDBox from 'src/mui/components/MDBox';
import MDInput from 'src/mui/components/MDInput';
import MDTypography from 'src/mui/components/MDTypography';
import PropTypes from 'prop-types';

export function InputFormItem(props) {
  const {
    id,
    label,
    name,
    hint,
    type,
    placeholder,
    autoFocus,
    autoComplete,
    required,
    externalErrorMessage,
    disabled,
    startAdornment,
    endAdornment,
    margin,
    variant,
    size,
    shrink,
    fullWidth,
    value,
  } = props;

  const {
    register,
    errors,
    formState: { touched, isSubmitted },
    setValue,
    control: { defaultValuesRef },
    getValues,
  } = useFormContext();

  const defaultValues = defaultValuesRef.current || {};

  const formValue = getValues(name);

  const [curValue, setCurValue] = useState(
    formValue || value || defaultValues[name] || '',
  );

  useEffect(() => {
    register({ name });
  }, [register, name]);

  const errorMessage = FormErrors.errorMessage(
    name,
    errors,
    touched,
    isSubmitted,
    externalErrorMessage,
  );

  return (
    <>
      <MDInput
        id={name}
        name={name}
        type={type}
        label={label}
        required={required}
        // inputRef={register}
        onChange={(event) => {
          setCurValue(event.target.value);
          setValue(name, event.target.value, {
            shouldValidate: false,
            shouldDirty: true,
          });
          props.onChange &&
            props.onChange(event.target.value);
        }}
        onBlur={(event) => {
          props.onBlur && props.onBlur(event);
        }}
        margin={margin}
        fullWidth
        variant={variant}
        size={size}
        placeholder={placeholder || undefined}
        autoFocus={autoFocus || undefined}
        autoComplete={autoComplete || undefined}
        InputLabelProps={{
          shrink: shrink,
        }}
        error={Boolean(errorMessage)}
        helperText={hint}
        InputProps={{ startAdornment, endAdornment }}
        inputProps={{
          name,
        }}
        disabled={disabled}
        value={
          props.forceValue ? value : formValue || curValue
        }
      />
      {errorMessage && (
        <MDBox mt={0.75}>
          <MDTypography
            component="div"
            variant="caption"
            color="error"
            fontWeight="regular"
          >
            {errorMessage}
          </MDTypography>
        </MDBox>
      )}
    </>
  );
}

InputFormItem.defaultProps = {
  type: 'text',
  required: false,
};

InputFormItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  externalErrorMessage: PropTypes.string,
  onChange: PropTypes.func,
  startAdornment: PropTypes.any,
  endAdornment: PropTypes.any,
  margin: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  shrink: PropTypes.bool,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
};

export default InputFormItem;
