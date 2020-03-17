export {};

type week = '日' | '月' | '火' | '水' | '木' | '金' | '土';
let dayOfTheWeek: week = '日';
dayOfTheWeek = '月';
// タイプ外なのでむり
// dayOfTheWeek = '31';

type month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
let month: month = 1;
month = 12;
// 13月などないのだ
// month = 13;

// trueを指定しているため、falseにはならない
let TRUE: true = true;
// TRUE = false;
