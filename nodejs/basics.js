const mathObj = require('./math-lib'); //Common module system
//TO RUN: node file-name.js
console.log("Hello to node js basics")
//TO DEBUG: node --inspect-brk filename.js
//Then go to chrome://inspect on browser
console.log("is debug working")
//How to automate the build part: Tool nodemon, nodemon is a tool that helps 
//develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
//Run: npm init in the folder nodejs (This create the package.json file)
//Run: npm install -D nodemon (A develoopment dependency)
//Add relevent script in package json to work with node js
//Simple command after making the package.json chanegs: npm run key used in package.json(ex: start:dev)

//Common js module system
// const mathobj=require(path)
console.log("App Started");
console.log("Some Task here: ", mathObj.add(2,5));
console.log("App Finished");

//In node js the asyn func using callback should be converted to promise or event.
//Promise: Used when we need only one answer.
//Events: When we need multiple answers