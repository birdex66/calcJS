const isFloat = n =>
	typeof n === 'number' && !Number.isInteger(n);

console.log(isFloat(3.14));
console.log(isFloat(42));
console.log(isFloat(`3.14`));
console.log(isFloat(3.));
console.log(isFloat(`3.`));
