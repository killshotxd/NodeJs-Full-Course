// const app = require("./app");

// 31:45
// console.log(app.x);
// console.log(app.y);
//40:00

// const arr = [2, 3, 45, 6, 6, 7, 7, 2, 3, 8];
// let result = arr.filter((item) => {
//   return item === 3;
// });

// let result = arr.filter((item) => {
//   return item >= 3;
// });

// const setItem = new Set(result);

// console.log(result);
// console.log(setItem);

// 45:00

// Creating and writing in a file

// const fs = require("fs");
// fs.writeFileSync("hello.txt", "Welcome");

// Getting directory and file

// console.log("-->>", __dirname);
// console.log("-->>", __filename);

// Only single function import from module

// const fs = require("fs").writeFileSync;

// fs("abc.txt", "abc");

// const gs = require("fs").writeFileSync;

// gs("abc2.txt", "abc");

// Making basic server

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("<h1>Hello this is Killshot</h1>");
//     res.end();
//   })
//   .listen(4500);

// BTS--------

// const dataControl = (req, res) => {
//   res.write("<h1>Hello this is Killshot</h1>");
//   res.end();
// };

// http.createServer(dataControl).listen(4500);

// 1h4m

// package.json
// npm init
// npm i colors
//npm i simple-node-logger

// ColorFull console

const colors = require("colors");

console.log("lorem10".america);
console.log("Hello Killshot".red);
console.log("Hello Killshot".bgMagenta);
