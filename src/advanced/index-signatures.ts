export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {name: "jima", underTwenty: false};

//  how to write index signatures
// { [ index: TypeForIndex ]: typeForValue }
profile.name = "jima";
profile.age = 23;
profile.nationality = "Japan";