// Manipulating objects

const SOME_KEY = 'some_key';
const obj = {
  some_key: ['hi'],
};

console.log('Before', obj);
obj[SOME_KEY] = obj[SOME_KEY] ?? [];
obj[SOME_KEY].push('new value');
console.log('After', JSON.stringify(obj, null, 2));
