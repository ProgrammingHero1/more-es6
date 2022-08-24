const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fives = numbers.find(num => num % 5 === 0)
const fivesAll = numbers.filter(num => num % 5 === 0);

console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 30000 },
    { id: 4, name: 'tablet', price: 23000 },
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap)
