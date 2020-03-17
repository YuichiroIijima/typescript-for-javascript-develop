export {};

// 引数に ? をつけると、オプショナルな型になる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.72, 60, true);

// bmi(身長, 体重, console.logで出力するかどうか)
// console.log(bmi(1.72, 60, true));
// console.log(bmi(1.72, 60, false));
// console.log(bmi(1.72, 60));
