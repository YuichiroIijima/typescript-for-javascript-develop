export {};

/**
 * 1. owner
 *  - 所有者
 *  - 初期化時に設定できる。
 *  - 途中で変更はできない。
 *  - 参照できる。
 * 2. secretNumber
 *  - 個人番号
 *  - 初期化時に設定できる。
 *  - 途中で変更可能なものにできる。
 *  - 参照できない。
 */

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  // getter 読み込み専用
  get owner() {
    return this._owner;
  }

  // setter は書き換えることができるようにする
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("Jima", 1234567890);
// getterは参照専用のため、変更できない
// card.owner = "じま";
console.log(card.owner);
// card.secretNumber;
// console.log(card._secretNumber);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());

console.log(card.secretNumber);