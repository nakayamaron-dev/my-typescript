let r = /ab+c/;

console.log(r.test("abbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは"));

r = /^abc/;

console.log(r.test("abcdefg"));
console.log(r.test("Hello, abcdefg"));

const result = "Hello, abbbbbc world!".match(/a(b+)c/);

if (result != null) {
  console.log(result[0]);
  console.log(result[1]);
}
