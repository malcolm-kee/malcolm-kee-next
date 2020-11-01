import cx from 'classnames';
import * as React from 'react';
import { callAll } from 'src/lib/fn-lib';
import { FieldContext } from './field-context';

export type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  onChangeValue?: (val: string) => unknown;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { className, onChange, onChangeValue, ...inputProps },
    ref
  ) {
    const { inputId } = React.useContext(FieldContext);

    return (
      <textarea
        id={inputId}
        {...inputProps}
        onChange={callAll(
          onChange,
          onChangeValue && ((ev) => onChangeValue(ev.target.value))
        )}
        className={cx(
          'form-textarea py-3 px-4 block w-full transition ease-in-out duration-150',
          className
        )}
        ref={ref}
      />
    );
  }
);
