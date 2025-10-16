interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
}

const car: Car = {
  wheels: 4,
  brand: 'Bmw',
  type: 'diesel',
  isNew: true,
};

car.brand = 'Vaz';

const car2: Car = {
  wheels: 2,
  brand: 'Vaz',
  type: 'gazoil',
  isNew: false,
}

interface Test {
  [key: string]: number;
}

const myTest: Test = {
  wheels: 3,

}