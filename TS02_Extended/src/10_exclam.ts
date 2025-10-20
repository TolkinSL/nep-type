let str: string | null = null;

const num = 7;

if (num > 5) {
  str = 'abc';
}

// ! Утверждение что точно будет значение
console.log(str!.toUpperCase());

function test(name?: string) {
  const fullName: string = name!;

}