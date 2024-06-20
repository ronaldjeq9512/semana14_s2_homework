const numbers = [1, 2, 3, 4, 5];

// map
const doubledNumbers = numbers.map(n => n * 2);
console.log('Doubled:', doubledNumbers);

// filter
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even:', evenNumbers);

// some
const hasEven = numbers.some(n => n % 2 === 0);
console.log('Has even number:', hasEven);

// every
const allEven = numbers.every(n => n % 2 === 0);
console.log('All even:', allEven);

// find
const firstEven = numbers.find(n => n % 2 === 0);
console.log('First even number:', firstEven);
