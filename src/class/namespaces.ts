export {};

namespace Japanese {
  export namespace Tokyo {
    // exportをつけることで、class外から参照することができる
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
      export class Person {
        constructor(public name: string) {}
      }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("jima");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("yamazaki");
console.log(meOsaka.name);

const michael = new English.Person("Michael", "joseph", "Jackson");
console.log(michael);