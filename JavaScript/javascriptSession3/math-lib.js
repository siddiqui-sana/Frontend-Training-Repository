
//inline export(export happening during the defining)
export function add(a,b) {
    console.log("sum", a+b);
}

function sub(a,b) {
    console.log("sub", a-b);
}

function mul(a,b) {
    console.log("mul", a*b);
}

function div(a,b) {
    console.log("div", a/b);
}

//any function here defined within  MODULE is scoped to the module and cannot be global scope
//the functions that are exported can only be imported
//For able to import module in a file, we need to make that function in its module as export.

// named export
export{sub,mul};

//default export
//oNLY ONE MEMber can be exported using default.(i.e. one function) while from other two exporting techniques any number of...
//Why this rule: 
export default div;

// 1. Modules in Javascript (library). Files that will be included: index.html, main.js, math-lib.js
// 2. The javascript code should be packages/bundled. (Js cannot do it itself)
// 3. Some solution for code packaging: web pack (It bundles the code into single files) so we will in HTML file give the link to the bundled js file. The frameworks use it internally
// 4. webpack is a library so we need a runtime to run it. Node js is a platform that serves as development runtime for web pack and also it gives facility for dependency management
// 5. Node Js: Runtime env, Dependency management
// 6. package.json: node config file
// 7. npm command gives different set of commands to work with
// 8. Step 1: open file in terminal Step2: run npm init This creates a package.json file 
// npm install package-name --flags
// --flags
// global/-g : global installations (system level install) CLI(npm)
//local install/ application specific libraries
// --save
 
// npm install webpack
// npm install webpack-cli -D

//package.json: npm install

// major.minor.patch
// ^1.0.0: min 1.0.0 or latest minor release(1.1.0)
// ~1.0.0 is preferred 

// Run a Script
// npm run script-name

//After any change we need to build

// The webpack.config.js file that we create should be at same level as package.json


// Everythng that is installed using npm goes in the folder: node_modules
