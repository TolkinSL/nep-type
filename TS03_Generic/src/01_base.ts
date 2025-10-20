type TestType<T> = T;
type XType = TestType<string>;

function toArray<T>(...arr: T[]): T[] {
  return arr;
}

toArray(1, 2, 3);
toArray('ab', 'cd');

console.log(toArray('abc', 'cde'));