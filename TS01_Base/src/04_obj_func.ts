function printPoint(point: { x: number; y: number }): void {
  console.log('x', point.x, 'y', point.y);
}

printPoint({ x: 2.5, y: 1.2 });
// printPoint({x: 2.5, y: 1.2, z: 4})

const testObj = {
  x: 2.5,
  y: 1.2,
  z: 4,
};
printPoint(testObj);

function printName(user: { firstName: string; lastName?: string }): void {
  console.log("FirstName", user.firstName);
  console.log("LastName", user.lastName?.toUpperCase);
  
  if (user.lastName) {
    console.log("LastName", user.lastName.toUpperCase);
  }
}
