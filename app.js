// function filterOutOdds() {
// 	var nums = Array.prototype.slice.call(arguments);
// 	return nums.filter(function(num) {
// 		return num % 2 === 0;
// 	});
// }
//Refactor it to use the rest operator & an arrow function:

const filterOutOdds = (...nums) => nums.filter((n) => n % 2 === 0);

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.

const findMin = (...nums) => nums.reduce((ac, nVal) => (ac < nVal ? ac : nVal));

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...nums) => [ ...arr, ...nums.map((n) => n * 2) ];

/** remove a random element in the items array
and return a new array without that item. */
const arr = [ 1, 4, 7, 8, 9 ];
const removeRandom = (items) => {
	const newArr = [ ...items ];
	newArr.splice(Math.floor(Math.random() * newArr.length), 1);
	return newArr;
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [ ...array1, ...array2 ];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
	const newObj = { ...obj };
	delete newObj[key];
	return newObj;
};

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({ ...obj, [key]: val });
