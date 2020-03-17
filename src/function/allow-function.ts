export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

console.log(bmi(1.72, 60));