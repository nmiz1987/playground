// also https://github.com/jherr/javascript-sets/blob/main/use-case.ipynb

const arr = new Array(300000).fill(0).map((_, index) => index);

const start1 = performance.now();
for (let i = 0; i < 300000; i++) {
  arr.includes(i);
}
const end1 = performance.now();
console.log(`Array: ${(end1 - start1).toLocaleString()}ms`);

const set = new Set(new Array(300000).fill(0).map((_, index) => index));

const start2 = performance.now();
for (let i = 0; i < 300000; i++) {
  set.has(i);
}
const end2 = performance.now();
console.log(`Set: ${(end2 - start2).toLocaleString()}ms`);

const m = new Map(new Array(10).fill(0).map((_, index) => [index, `#${index}`]));

console.log(m);

console.log(m.size);
