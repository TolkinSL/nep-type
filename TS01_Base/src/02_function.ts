function sum(a: number, b: number): number {
  return a + b;
}

function log(str: string, userId?: number): void {
  console.log('Hello', str, 'user', userId || 15);
}

function crash(): never {
  throw new Error('crash');
}

sum(2, 1);
log('Vasia')
log('Petia', 3)

function avg(...nums: number[]) {
  const sum = nums.reduce((total, current) => total + current, 0)
  return sum / nums.length
}

console.log('Avg', avg(1, 2, 3));