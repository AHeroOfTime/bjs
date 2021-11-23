import first, { returnHi as sayHi, last, middle } from './utils.js';
// import wes from './wes.js';
import * as everything from './wes.js';
import { handleButtonClick } from './handlers.js';

// console.log(wes);

// console.log(everything);

// console.log(first);

// const name = 'aaron';

// console.log(sayHi(name));

// console.log(last, middle);

const button = document.querySelector('button');

button.addEventListener('click', handleButtonClick);
