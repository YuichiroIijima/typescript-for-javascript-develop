export {};

/**
 * memo
 * publicは、どこでも呼び出せる
 * privateは、クラス内なら呼び出すことができる
 * protectedは、
 */
class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  // constructorにはreturnがないので、戻り値は必要ない
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("Taro", 30, "Japan");
console.log(taro.profile());
// console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();

let robot = new Android("Jima", 1, "Japan");
console.log(robot.profile())