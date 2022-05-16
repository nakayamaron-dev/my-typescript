// 計算されたプロパティ名
const propName = "foo";
const obj = {
  [propName]: 123,
};

console.log(obj.foo);

// オブジェクトリテラル スプレッド構文
const obj1 = {
  bar: 456,
  baz: 789,
};

const obj2 = {
  foo: 123,
  ...obj1,
};

console.log(obj2);

// オブジェクトはいつ同じなのか
const foo = { num: 123 };
const bar = foo;
console.log(bar.num);
bar.num = 0;
console.log(foo.num);
