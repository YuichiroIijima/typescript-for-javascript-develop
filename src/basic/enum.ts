export {};

enum Months {
  January = 1,
  February = 2,
  March = 3,
  Aplil = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = 'FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}
console.log(COLORS.YELLOW);