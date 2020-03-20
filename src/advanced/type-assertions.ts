export {};

let name: any = "jima";

// 文字の長さを調べたいから、numberが望ましい
// けど、型推論でanyになってしまう
// そのため、型アサーションをする必要がある
// let length = name.length as number;
// let length = (name as string).length;
let length = (<string>name).length;


// length = "foo";