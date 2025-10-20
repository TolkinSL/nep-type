type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [3, 4]];

type JsonPrimitive = string | number | boolean;
type JsonObject = { [i: string]: JsonValue };
type JsonArray = JsonValue[];
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

function myJson(arg: JsonValue) {}

myJson('Go');
myJson({ test: 'Vasia', admin: true });
myJson(['ab', 'cd']);
