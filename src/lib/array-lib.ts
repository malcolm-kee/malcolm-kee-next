export type NestedArray<Item> = Array<Item | NestedArray<Item>>;

export const flatten = <T extends unknown>(
  nestedArray: NestedArray<T>
): T[] => {
  const result: T[] = [];

  flattenIt(nestedArray, result);

  return result;
};

function flattenIt<T>(input: NestedArray<T> | T, output: T[]) {
  if (Array.isArray(input)) {
    input.forEach((item) => flattenIt(item, output));
  } else {
    output.push(input);
  }
}
