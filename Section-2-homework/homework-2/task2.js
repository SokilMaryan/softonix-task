/* eslint-disable linebreak-style */
// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum(a, b) {
	return a + b;
}
  

function memoize(fn) {
	const cache = new Map();
  
	return (...args) => {
		const key = JSON.stringify(args);
  
		if (cache.has(key)) {
			const cacheKey = cache.get(key);
			console.log(cacheKey, "returned from the cache");
			return cacheKey;
		}
    
		const result = fn(...args);
		cache.set(key, result);
		console.log(result, "caches the new execution");
		return result;
	};
}
const sumMemoized = memoize(sum);
sumMemoized(1, 3); // результат 4
sumMemoized(3, 3); // результат 6
sumMemoized(1, 3); // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання