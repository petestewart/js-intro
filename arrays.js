const getValue = (array, index) => array[index];
const myArray = ['zero', 'one', 'two', 'three']
console.log(getValue(myArray, 2));

const isLuna = (array) => array.includes('Luna');
const arrayWith = ['Aurora', 'Sol', 'Luna'];
const arrayWithout = ['sun', 'moon', 'stars'];
console.log(`arrayWith contains Luna: ${isLuna(arrayWith)}`);
console.log(`arrayWithout contains Luna: ${isLuna(arrayWithout)}`);
