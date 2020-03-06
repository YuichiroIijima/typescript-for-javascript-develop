export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: "Jima",
  age: 23
};

type Profile = {
  name: string,
  age: number
} 

const example2: Profile = {
  name: "jima",
  age: 23
}

type Profile2 = typeof example1;