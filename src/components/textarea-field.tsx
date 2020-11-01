import { Field, FieldProps } from './field';
import { Textarea, TextareaProps } from './textarea';

export type TextareaFieldProps = TextareaProps &
  Pick<FieldProps, 'label'> & {
    wrapperClass?: string;
  };

export const TextareaField = ({
  label,
  wrapperClass,
  id,
  ...inputProps
}: TextareaFieldProps) => {
  return (
    <Field className={wrapperClass} label={label} inputId={id}>
      <Textarea {...inputProps} />
    </Field>
  );
};
