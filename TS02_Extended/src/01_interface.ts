interface User {
  readonly email: string;
  readonly login: string;
  password?: string;
}

// Дополнение интерфейса
interface User {
  isOnline?: boolean;
}

interface Person {
  readonly firstName: string;
  lasName?: string;
  yearOfBirth?: number;
}

// Расширение интерфейса
// interface Employee extends User, Person {}
interface Employee extends User, Person {
  isWork: boolean;
}

const user1: Employee = {
  email: 'test@test',
  login: 'vvv',
  firstName: 'Vasia',
  isWork: true,
}

interface Developer extends Employee {
  level: 'junior' | 'middle' | 'senior';
}