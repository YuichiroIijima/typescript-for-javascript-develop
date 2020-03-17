export {};

const nestYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
}

console.log(nestYearSalary(1000));