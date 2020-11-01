import { useId } from '@reach/auto-id';
import cx from 'classnames';
import * as React from 'react';
import { FieldContext } from './field-context';

export type FieldProps = React.ComponentPropsWithoutRef<'div'> & {
  label?: React.ReactNode;
  inputId?: string;
  children: React.ReactNode;
};

export const Field = ({
  label,
  children,
  className,
  inputId,
  ...divProps
}: FieldProps) => {
  const ensuredId = useId(inputId);

  return (
    <div className={cx(className)} {...divProps}>
      {label && (
        <label
          htmlFor={ensuredId}
          className="block text-sm font-medium leading-5 text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <FieldContext.Provider
        value={React.useMemo(
          () => ({
            inputId: ensuredId,
          }),
          [ensuredId]
        )}
      >
        {children}
      </FieldContext.Provider>
    </div>
  );
};
