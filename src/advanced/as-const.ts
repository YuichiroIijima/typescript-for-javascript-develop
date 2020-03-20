export {};

let name = "jima";

name = "yuichiro";

// type = "yamazaki"になる
let nickname = "yamazaki" as const;

// error
// nickname = "yamasan";
// OK
// nickname = "yamazaki";

// as constをつけると、readonlyに属性に変わる
// nestしても、すべてreadonlyになる
let profile = {
  name: "jima",
  height: 172
} as const;

// error
// profile.name = "yama";
// profile.height = 170;