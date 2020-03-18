export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Yuichiro";
  static lastName: string = "Iijima";

  static work() {
    // return "Hey, guys! This is Yuichiro! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// const me = new Me();
// console.log(me.isProgrammer);

// staticなので、インスタンスを生成せずに直接呼び出す
console.log(Me.isProgrammer);
// functionも直接呼び出せる
console.log(Me.work());