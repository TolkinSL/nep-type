function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: string | number, b: string | number): string | number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }

  throw new Error('Должны быть одинаковый тип данных')
}

type asyncCb = (res: number) => number;

function asyncSum(a: number, b:number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCb): number;

function asyncSum(a: number, b: number, cb?: asyncCb): number | Promise<number> {
  const result = a + b;
  if (cb) {
    return cb(result);
  }

  return Promise.resolve(result);
}