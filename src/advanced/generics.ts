export {};

// これをひとつにまとめたい
// const echo = (arg: number) => {
//   return arg;
// };

// const echo = (arg: string) => {
//   return arg;
// };

// 変数のgenerics
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(typeof echo, echo<number>(100));
console.log(typeof echo, echo<string>('hi'));
console.log(typeof echo, echo<boolean>(true));

// classのgenerics
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror("string").echo());
console.log(new Mirror(123).echo());