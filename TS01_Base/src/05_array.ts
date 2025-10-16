const str1: string[] = ["1a", "2a", "3a"];
const str2: Array<string> = ["1b", "2b", "3b"];

interface Car {
  color: string;
  brand: string;
}

const cars: Car[] = [];
cars.push({color: 'cyan', brand: 'Bmw'});
cars.push({color: 'red', brand: 'Vaz'});

console.log(cars);

function printArr(arr: unknown[]): void {
  arr.forEach((item, index) => console.log(item))
}

printArr(cars);