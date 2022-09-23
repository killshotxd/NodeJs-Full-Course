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

// Creating files

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "files");

// Creates no of files with this loop in specified dir

// for (i = 1; i < 6; i++) {
//   fs.writeFileSync(dirPath + `/hello${i}.txt`, "A simple text File");
// }

// Read files in specified dir
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("The File name is --> ", item);
//   });
// });

// CRUD with File system

// 2h10m

// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "curd");
// const filePath = `${dirPath}/file.txt`;
// Create a file
// fs.writeFileSync(filePath, "This is a file system");

// Read a file
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// Update a file
// fs.appendFile(filePath, "and file name is file.txt", (err) => {
//   if (!err) {
//     console.log("File is updated");
//   }
// });

// Rename a file

// fs.rename(filePath, `${dirPath}/rename.txt`, (err) => {
//   if (!err) {
//     console.log("File name is updated");
//   }
// });

// Delete a file

// fs.unlinkSync(`${dirPath}/rename.txt`);

// What is Buffer in node?

// Buffer is temporary file location

// Asynchronous Basics in NOde js
// 2h:20m

// console.log("start exe........");
// console.log("logic exe........");
// console.log("complete exe........");

// console.log("start exe........");

// setTimeout(() => {
//   console.log("logic exe........");
// }, 1000);

// console.log("complete exe........");

// Node js , javascript is Asynchronous language it doesn't wait for other codes to execute an independent code

// Asynchronous is fast

// Drawbacks of Asynchronous
// let a = 10,
//   b = 0;

// setTimeout(() => {
//   b = 20;
// }, 1000);

// console.log(a + b);

// Handle Asynchronous data in NOde js
// 2h:29m

// let a = 10,
//   b = 0;

// let waitingData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 1000);
// });

// waitingData.then((data) => {
//   console.log(a + data);
// });

// USed for custom functions

// 2h36m

// How node js Works

// console.log("Starting Up"); //this directly executes

// setTimeout(() => {
//   console.log("2 second log");
// }, 2000); // this goes in nodejs API stack

// setTimeout(() => {
//   console.log("0 second log");
// }, 0); // this goes in nodejs API stack

// console.log("Finishing Up"); //this directly executes

// -----------EXPRESS JS--------------

// 2h51m

// Installing express js
// npm i express

// Creating live server and pages using express
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello , This is Home page");
});

app.get("/about", (req, res) => {
  res.send("Hello , This is About page");
});

app.get("/help", (req, res) => {
  res.send("Hello , This is Help page");
});

app.listen(5000);

// using nodemon we can edit servers in live with refresh

// nodemon index.js
