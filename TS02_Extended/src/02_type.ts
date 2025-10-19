type Union1 = 'a' | 'b' | 'c';
type Union2 = 'a' | 'c' | 'e';

type Union3 = Union1 | Union2;
type Union4 = Union1 & Union2; // Работает как И

type User = {
  email: string;
  login: string;
  password?: string;
}

type Person = {
  firstName: string;
  lastName: string;
  yearOfBirth?: number;
}

type Union5 = User & Person; // В случае объектов это объединение всех свойств

const testUn5: Union5 = {
  email: 'tesr@test',
  login: 'vasia',
  firstName: 'Vasia',
  lastName: 'Petrov',
}