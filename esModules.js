// module.js
export const greet = (name) => `Hello, ${name}`;

// main.js
import { greet } from './module.js';
console.log(greet('World'));
