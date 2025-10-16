enum ShapeKind {
  Circle,
  Square,
}

const myShape = ShapeKind.Square;

interface Circle {
  radius: number;
  kind: ShapeKind.Circle;
}

const myCircle: Circle = {
  radius: 5,
  kind: 0
}