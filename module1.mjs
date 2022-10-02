let a="hello"
let b="john"
let c="lesnar"

export default a; //this way you are exporting this variable of module1.mjs file default
export {b}; //if export is done from a module without default then this how paranthesis is used
export {c};
//now refer module2.mjs file where these are imported