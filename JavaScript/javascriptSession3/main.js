// import statement
//import {} from 'module' (Inside the {} we mention the functions we want from that module (cont+space)) 
//3rd party
//custom-made module (In this case we need to give the relative file path)
// ./ : it refers to the current directory
// ../ : Takes you one level heigher
import {add, mul} from "./math-lib";
//Rule for default export's import:
import div from "./math-lib";
//We can do in one line by comma seperation but default one will be outside the bracket and others inside the bracket
//Example import div, {sum,mul} from "./math-lib";
add(9,10)
