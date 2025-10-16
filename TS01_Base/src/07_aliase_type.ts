type MyId = number | string;
const userId: MyId = 'admin';

type Pair = [string, string];
// const userPair: Pair = [1, 'Vasia'];

type Car = {
  color: string;
  brand: string;
  door: number;
};

type Status = 'ok' | 'loading' | 'error';
const myStatus: Status = 'loading';

function printId(id: number | string): void {
  if (typeof id === 'string') {
    // Сужение типов
    console.log(id.toUpperCase);
  } else {
    console.log(id);
  }
}

function welcome(person: [string, string] | string) {
  if (Array.isArray(person)) {
    console.log('Hello', person.join(' '));
  } else {
    console.log('Hello', person)
  }
}

welcome(['Vasia', 'Ivanov']);
welcome('Ivanov');