import * as React from 'react';

export type FieldContextValue = {
  inputId: string | undefined;
};

export const FieldContext = React.createContext<FieldContextValue>({
  inputId: undefined,
});
