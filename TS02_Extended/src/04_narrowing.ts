function example1(x: number | string) {
  if (typeof x === 'string') {
    x.toUpperCase();
  } else {
    x.toString();
  }
}

function example2(str: string[] | null) {
  if (str && typeof str === 'object') {
    str?.map((s) => s); // Избавление от null
  }

  if (Array.isArray(str)) {
    str?.map((s) => s); // Избавление от null
  }
}

function example3(xd: string | Date) {
  if (xd instanceof Date) {
    xd.getDay();
  } else {
    xd.toUpperCase();
  }
}

type Fish = {
  water: boolean;
}

type Bird = {
  fly: boolean;
}

function example4(animal: Fish | Bird) {
  if ('water' in animal) {
    return animal.water;
  }

  return animal.fly;
}