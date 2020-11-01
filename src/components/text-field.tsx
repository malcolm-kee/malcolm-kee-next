import { Field, FieldProps } from './field';
import { TextInput, TextInputProps } from './text-input';

export type TextFieldProps = TextInputProps &
  Pick<FieldProps, 'label'> & {
    wrapperClass?: string;
  };

export const TextField = ({
  label,
  wrapperClass,
  id,
  ...inputProps
}: TextFieldProps) => {
  return (
    <Field className={wrapperClass} label={label} inputId={id}>
      <TextInput {...inputProps} />
    </Field>
  );
};
