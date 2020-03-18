export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

// 抽象クラス内の抽象メソッドは必ず宣言しなければならない
class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}