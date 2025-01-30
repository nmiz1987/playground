import os from 'node:os';

console.log('cwd:', process.cwd());

console.log('CPU architecture:', os.arch());
console.log('platform:', os.platform());
console.log('hostname:', os.hostname());
console.log('machine:', os.machine());
