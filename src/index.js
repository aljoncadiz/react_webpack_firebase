var message = require('./script1');

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

document.write(`this is a formatted ES6 ${message}`);
