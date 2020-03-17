export {};

class Person {
  name: string;
  age: number;

  // constructorにはreturnがないので、戻り値は必要ない
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
let taro = new Person("Taro", 30);
console.log(taro.profile());
// let hanako = new Person();
