export const callAll = <Args extends any[]>(
  ...callbacks: Array<undefined | boolean | ((...args: Args) => unknown)>
) => {
  return (...args: Args): void => {
    callbacks.forEach((cb) => {
      if (typeof cb === 'function') {
        cb(...args);
      }
    });
  };
};
