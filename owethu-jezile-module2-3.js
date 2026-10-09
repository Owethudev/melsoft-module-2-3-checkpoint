// challenge1

// const because my name will never change
const myName = "Owethu Jezile";

// let because my age is constantly changing
let myAge = 23;

// let because opinion can change anytime
let myOpinion = true;

// let because my favourite temperature can change
let myFavouriteTemperature = 22.5;

// const because NaN is a constant value
const myNaN = Number('not a number');

// const because Infinity is a constant value
const myInfinity = 1 / 0;

// const because Number.MAX_SAFE_INTEGER is a constant value
const myMaxSafeInteger = Number.MAX_SAFE_INTEGER;

// const because null is a constant value
const myNull = null;

// const because undefined is a constant value
const myUndefined = undefined;

// A template literal that uses at least two of the above variables
const myTemplateLiteral = `My name is ${myName} and my favourite temperature is ${myFavouriteTemperature} degrees Celsius.`;

// typeof outputs
//prediction - string , actual output - string
console.log(`${typeof myName}`);
//prediction - number , actual output - number
console.log(`${typeof myAge}`);
//prediction - boolean , actual output - boolean
console.log(`${typeof myOpinion}`);
//prediction - number , actual output - number
console.log(`${typeof myFavouriteTemperature}`);
//prediction - number , actual output - number
console.log(`${typeof myNaN}`);
//prediction - number , actual output - number
console.log(`${typeof myInfinity}`);
//prediction - number , actual output - number
console.log(`${typeof myMaxSafeInteger}`);
//prediction - object , actual output - object
console.log(`${typeof myNull}`);
//prediction - undefined , actual output - undefined
console.log(`${typeof myUndefined}`);

//additional cases typeof outputs
//prediction - object , actual output - object
console.log(`${typeof null}`);
//prediction - number , actual output - number
console.log(`${typeof NaN}`);
//prediction - undefined , actual output - undefined
console.log(`${typeof undefined}`);
//prediction - string , actual output - string
console.log(`${typeof "42"}`);
//prediction - string , actual output - string
console.log(`${typeof (typeof 42)}`);
//prediction - object , actual output - object
console.log(`${typeof [1, 2, 3]}`);
//prediction - function , actual output - function
console.log(`${typeof function() {}}`);

/*
i dont know why does typeof null return 'object' I just know it does and
NaN returns 'number' because it represents a number that is not a valid number */