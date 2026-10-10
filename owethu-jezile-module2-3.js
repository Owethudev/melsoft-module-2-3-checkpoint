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

//challenge2

//partA
//first value conversion
let firstValue = Number("123");
console.log(`result: ${firstValue} and type: ${typeof firstValue}`);
let firstvalue2 = parseInt("123");
console.log(`result: ${firstvalue2} and type: ${typeof firstvalue2}`);
let firstvalue3 = parseFloat("123");
console.log(`result: ${firstvalue3} and type: ${typeof firstvalue3}`);
let firstvalue4 = Boolean("123");
console.log(`result: ${firstvalue4} and type: ${typeof firstvalue4}`);
let firstvalue5 = String("123");
console.log(`result: ${firstvalue5} and type: ${typeof firstvalue5}`);

//second value conversion
let secondValue = Number("3.14");
console.log(`result: ${secondValue} and type: ${typeof secondValue}`);
let secondvalue2 = parseInt("3.14");
console.log(`result: ${secondvalue2} and type: ${typeof secondvalue2}`);
let secondvalue3 = parseFloat("3.14");
console.log(`result: ${secondvalue3} and type: ${typeof secondvalue3}`);
let secondvalue4 = Boolean("3.14");
console.log(`result: ${secondvalue4} and type: ${typeof secondvalue4}`);
let secondvalue5 = String("3.14");
console.log(`result: ${secondvalue5} and type: ${typeof secondvalue5}`);

//third value conversion
let thirdValue = Number("hello");
console.log(`result: ${thirdValue} and type: ${typeof thirdValue}`);
let thirdvalue2 = parseInt("hello");
console.log(`result: ${thirdvalue2} and type: ${typeof thirdvalue2}`);
let thirdvalue3 = parseFloat("hello");
console.log(`result: ${thirdvalue3} and type: ${typeof thirdvalue3}`);
let thirdvalue4 = Boolean("hello");
console.log(`result: ${thirdvalue4} and type: ${typeof thirdvalue4}`);
let thirdvalue5 = String("hello");
console.log(`result: ${thirdvalue5} and type: ${typeof thirdvalue5}`);

//fourth value conversion
let fourthValue = Number("42abc");
console.log(`result: ${fourthValue} and type: ${typeof fourthValue}`);
let fourthvalue2 = parseInt("42abc");
console.log(`result: ${fourthvalue2} and type: ${typeof fourthvalue2}`);
let fourthvalue3 = parseFloat("42abc");
console.log(`result: ${fourthvalue3} and type: ${typeof fourthvalue3}`);
let fourthvalue4 = Boolean("42abc");
console.log(`result: ${fourthvalue4} and type: ${typeof fourthvalue4}`);
let fourthvalue5 = String("42abc");
console.log(`result: ${fourthvalue5} and type: ${typeof fourthvalue5}`);


//fifth value conversion
let fifthValue = Number("");
console.log(`result: ${fifthValue} and type: ${typeof fifthValue}`);
let fifthvalue2 = parseInt("");
console.log(`result: ${fifthvalue2} and type: ${typeof fifthvalue2}`);
let fifthvalue3 = parseFloat("");
console.log(`result: ${fifthvalue3} and type: ${typeof fifthvalue3}`);
let fifthvalue4 = Boolean("");
console.log(`result: ${fifthvalue4} and type: ${typeof fifthvalue4}`);
let fifthvalue5 = String("");
console.log(`result: ${fifthvalue5} and type: ${typeof fifthvalue5}`);

//sixth value conversion
let sixthValue = Number(0);
console.log(`result: ${sixthValue} and type: ${typeof sixthValue}`);
let sixthvalue2 = parseInt(0);
console.log(`result: ${sixthvalue2} and type: ${typeof sixthvalue2}`);
let sixthvalue3 = parseFloat(0);
console.log(`result: ${sixthvalue3} and type: ${typeof sixthvalue3}`);
let sixthvalue4 = Boolean(0);
console.log(`result: ${sixthvalue4} and type: ${typeof sixthvalue4}`);
let sixthvalue5 = String(0);
console.log(`result: ${sixthvalue5} and type: ${typeof sixthvalue5}`);

//seventh value conversion
let seventhValue = Number(null);
console.log(`result: ${seventhValue} and type: ${typeof seventhValue}`);
let seventhvalue2 = parseInt(null);
console.log(`result: ${seventhvalue2} and type: ${typeof seventhvalue2}`);
let seventhvalue3 = parseFloat(null);
console.log(`result: ${seventhvalue3} and type: ${typeof seventhvalue3}`);
let seventhvalue4 = Boolean(null);
console.log(`result: ${seventhvalue4} and type: ${typeof seventhvalue4}`);
let seventhvalue5 = String(null);
console.log(`result: ${seventhvalue5} and type: ${typeof seventhvalue5}`);

//eighth value conversion
let eighthValue = Number(undefined);
console.log(`result: ${eighthValue} and type: ${typeof eighthValue}`);
let eighthvalue2 = parseInt(undefined);
console.log(`result: ${eighthvalue2} and type: ${typeof eighthvalue2}`);
let eighthvalue3 = parseFloat(undefined);
console.log(`result: ${eighthvalue3} and type: ${typeof eighthvalue3}`);
let eighthvalue4 = Boolean(undefined);
console.log(`result: ${eighthvalue4} and type: ${typeof eighthvalue4}`);
let eighthvalue5 = String(undefined);
console.log(`result: ${eighthvalue5} and type: ${typeof eighthvalue5}`);

//part b

//prediction - we get 53 and string resulting type
let predict1 = "5" + 3;
console.log(`${typeof predict1}`);
//under the hood, the + operator is used for string concatenation when one of the operands is a string.

//prediction - we get 2 and number resulting type
let predict2 = "5" - 3;
console.log(`${typeof predict2}`);
//under the hood, the - operator is used for subtraction and it converts the string to a number.

//prediction - we get 10 and number resulting type
let predict3 = "5" * "2";
console.log(`${typeof predict3}`);
//under the hood, the * operator is used for multiplication and it converts both strings to numbers.

//prediction - we get 2 and number resulting type
let predict4 = true + 1;
console.log(`${typeof predict4}`);
//under the hood, the + operator is used for addition and it converts the boolean to a number (true becomes 1).

//prediction - we get "true1" and string resulting type
let predict5 = true + "1";
console.log(`${typeof predict5}`);
//under the hood, the + operator is used for string concatenation when one of the operands is a string.

//prediction - we get 0 and number resulting type
let predict6 = false + null;
console.log(`${typeof predict6}`);
//under the hood, the + operator is used for addition and it converts the boolean to a number and null to a number .

//prediction - we get undefined and undefined resulting type
let predict7 = null + undefined;
console.log(`${typeof predict7}`);
//under the hood, the + operator is used for addition and it converts both operands to numbers (null becomes 0 and undefined becomes NaN).

//prediction - we get Infinity and number resulting type
let predict8 = 1 / 0;
console.log(`${typeof predict8}`);
//under the hood, the / operator is used for division and it results in Infinity when dividing by zero.

//prediction - we get NaN and number resulting type
let predict9 = 0 / 0;
console.log(`${typeof predict9}`);
//under the hood, the / operator is used for division and it results in NaN when dividing zero by zero.

//prediction - we get NaN and number resulting type
let predict10 = "abc" - 1;
console.log(`${typeof predict10}`);
//under the hood, the - operator is used for subtraction and it converts the string to a number (NaN) before performing the operation.

//prediction - we get "undefined" and string resulting type
let predict11 = [] + [];
console.log(`${typeof predict11}`);
//under the hood, the + operator is used for string concatenation when one of the operands is an array.

//prediction - we get "12" and string resulting type
let predict12 = [1] + [2];
console.log(`${typeof predict12}`);
//under the hood, the + operator is used for string concatenation when one of the operands is an array.