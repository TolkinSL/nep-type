let x: number = 2.5;
let s: string = 'Hello TS';
let b: boolean = true;

console.log(x, s, b)

let und: undefined = undefined;
let n: null = null;

//literal
const numl = 35;
const strl = "str";

let unk: unknown = 2
if (typeof unk === "string") {
  unk.toUpperCase;
}