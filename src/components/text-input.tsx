import cx from 'classnames';
import * as React from 'react';
import { callAll } from 'src/lib/fn-lib';
import { FieldContext } from './field-context';

export type TextInputProps = React.ComponentPropsWithoutRef<'input'> & {
  onChangeValue?: (val: string) => unknown;
};

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    { className, onChange, onChangeValue, ...inputProps },
    ref
  ) {
    const { inputId } = React.useContext(FieldContext);

    return (
      <input
        id={inputId}
        {...inputProps}
        onChange={callAll(
          onChange,
          onChangeValue && ((ev) => onChangeValue(ev.target.value))
        )}
        className={cx(
          'form-input py-3 px-4 block w-full transition ease-in-out duration-150',
          className
        )}
        ref={ref}
      />
    );
  }
);
