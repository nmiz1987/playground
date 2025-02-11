import { Database } from 'bun:sqlite';
const db = new Database('./mydb.sqlite', { create: true });

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Box', age: 30 },
// ];

// db.query('CREATE TABLE IF NOT EXISTS users (name text, age int)').run();

// show all tables in DB
const table = db.query('SELECT * FROM users').all();
console.log('Users table:');
console.table(table);

// const query = db.query('INSERT INTO users (name, age) VALUES ($name, $age)');

// for (const user of users) {
//   query.run({ $name: user.name, $age: user.age });
// }

// console.log(db.query('SELECT * FROM users').all());
