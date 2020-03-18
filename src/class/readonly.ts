export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("jima");
console.log(myVisaCard.owner);
// readonlyなので書き換え不可
// myVisaCard.owner = "jimasan";