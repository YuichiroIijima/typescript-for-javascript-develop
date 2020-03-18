export {};

class Mahotsukai {}
class Souryo {}

// TSは通常一つのクラスしか継承できない 単一継承
// 複数のinterfaceを継承することは許可されている
class Taro extends Mahotsukai {}

interface Kenja {
  // シグネチャ
  ionazun(): void;
}

interface Senshi {
  // シグネチャ
  kougeki(): void;
}

// 実装忘れを防ぐことができる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
console.log(jiro.kougeki());
console.log(jiro.ionazun());