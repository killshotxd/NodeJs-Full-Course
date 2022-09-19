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

// const colors = require("colors");

// console.log("lorem10".america);
// console.log("Hello Killshot".red);
// console.log("Hello Killshot".bgMagenta);

// node Chalk
// npm i chalk

// const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));

// Ignoring Node Modules
// create file .gitignore
// add "/node_modules"

// 1h27m

// Installing and using nodemon package

// npm i nodemon -g

// -g means installing a module globally

// Start nodemon
// type nodemon in terminal

// console.warn("What's up testing live code....");
// console.warn("Save the code see the magic....");

//Node js is Async

// 1h32m

// Simple API using node

// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.write(JSON.stringify(data));
//     res.end();
//   })
//   .listen(8000);

//   1h38m

// 1h:43m
// Input from command line
// const fs = require("fs");

// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

// const fs = require("fs");

// const input = process.argv;

// if (input[2] == "add") {
//   fs.writeFileSync(input[3], input[4]);
// } else if (input[2] == "remove") {
//   // Removing file from system
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("Invalid");
// }

// 1h:55m
