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
//under the hood, the - operator converts the string to a number.

//prediction - we get 10 and number resulting type
let predict3 = "5" * "2";
console.log(`${typeof predict3}`);
//under the hood, the * operator converts both strings to numbers.

//prediction - we get 2 and number resulting type
let predict4 = true + 1;
console.log(`${typeof predict4}`);
//under the hood, the + operator  converts the boolean to a number.

//prediction - we get "true1" and string resulting type
let predict5 = true + "1";
console.log(`${typeof predict5}`);
//under the hood, the + operator is used for string concatenation when one of the operands is a string.

//prediction - we get 0 and number resulting type
let predict6 = false + null;
console.log(`${typeof predict6}`);
//under the hood, the +  converts the boolean to a number and null to a number .

//prediction - we get undefined and undefined resulting type
let predict7 = null + undefined;
console.log(`${typeof predict7}`);
//under the hood, the + operator converts both operands to numbers.

//prediction - we get Infinity and number resulting type
let predict8 = 1 / 0;
console.log(`${typeof predict8}`);
//under the hood, any number above zero in javascript results in Infinity when dividing by zero.

//prediction - we get NaN and number resulting type
let predict9 = 0 / 0;
console.log(`${typeof predict9}`);
//under the hood, dividing zero by zero results in NaN.

//prediction - we get NaN and number resulting type
let predict10 = "abc" - 1;
console.log(`${typeof predict10}`);
//under the hood, the - operator converts the string to a number.

//prediction - we get "undefined" and string resulting type
let predict11 = [] + [];
console.log(`${typeof predict11}`);
//under the hood, the + operator converts both operands to strings.

//prediction - we get "12" and string resulting type
let predict12 = [1] + [2];
console.log(`${typeof predict12}`);
//under the hood, the + operator converts both operands to strings.

/* 1.Number('42abc') - will convert the whole value into a value then get NaN
     parseInt('42abc') - Will give us the integer in the string which is 42
   2.when we have decimals especially in banking when we are dealing with money
   3.it returns zero , a user might leave the field blank but we get a value of zero*/

//challenge3
/*1.we take the monthly gross salary and calculate the tax, UIF, and medical aid amounts 
    then we get to the net salary*/
let monthlyGrossSalary = 45000;
let taxRate = 0.25;
let uifRate = 0.01;
let medicalAid = 2500;
let taxAmount = monthlyGrossSalary * taxRate;
let uifAmount = monthlyGrossSalary * uifRate;
let netSalary = monthlyGrossSalary - taxAmount - uifAmount - medicalAid;
console.log(`net salary is: R ${netSalary.toFixed(2)}`);
/*2. calculating the total value of items in a shopping cart, applying a discount, and adding VAT*/
let cart = 0;
cart+= 150;
cart+= 85;
cart+= 220;
let discount = 0.1;
let vat = 0.15;
let discountAmount = cart * discount;
let vatAmount = (cart - discountAmount) * vat;
let finalCartValue = cart - discountAmount + vatAmount;
console.log(`total cart value is: R ${finalCartValue.toFixed(2)}`);
//3.
let name = prompt("Enter your name:") ;
let age = parseInt(prompt("Enter your age:")) >= 18 ? "Age is valid" : "Age is not valid";
let password = prompt("Enter your password:").length >= 8 ? "Password is valid" : "Password is not valid";
let Email = prompt("Enter your email:");
let confirmedEmail = prompt("Confirm your email:") === Email ? "Email confirmed" : "Email does not match";
//4.
let loggedIn = true;
let emailVerified = true;
let isAdmin = false;
let access = (loggedIn && emailVerified) || isAdmin ? "Access granted" : "Access denied";
//5.
let number = +prompt("enter a number:");
let isDarkMode = true;
!isDarkmode;
//6.
let membershipBadge = membershipType === 'premium' ? 'Premium Member' : membershipType === 'trial' ? 'Trial Member' : 'Free Member';
//7.
let firstName = "Thabo";
let lastName = "Nkosi";
let ageThabo = 28;
let greeting1 = "Welcome back " + firstName + " " + lastName + ", you are " + ageThabo + " years old.";
let greeting2 = `Welcome back ${firstName} ${lastName}, you are ${ageThabo} years old.`;
//template literals are better because they are more readable and easier to maintain.
/*1.let x = 5 ; ++x = 6 ; x++ = 5 ;
2.let example = 10 % 3; // Returns 1
let example2 = 15 % 4; // Returns 3
let example3 = 20 % 6; // Returns 2
3.bad practie , i would not use them when there is alot of variables and complexity
*/

//challenge4
//partA
//1.prediction - true because false when converted to a number is zero , actual output - true.
console.log(0 == false);
//2.prediction - false because strict equality compares both value and type, actual output - false.
console.log(0 === false);
//3.prediction - true because an empty string is converted to 0, actual output - true.
console.log("" == 0);
//4.prediction - false because strict equality checks the type as well, actual output - false.
console.log("" === 0);
//5.prediction - true because the string "0" is converted to the number 0, actual output - true.
console.log("0" == 0);
//6.prediction - false because strict equality does not convert types, actual output - false.
console.log("0" === 0);
//7.prediction - false , actual output - true.
console.log(null == undefined);
//8.prediction - false because null and undefined are different types, actual output - false.
console.log(null === undefined);
//9.prediction - true because null is 0 when converted to a number, actual output - false.
console.log(null == 0);
//10.prediction - true because null is converted to 0 in a comparison, actual output - true.
console.log(null >= 0);
//11.prediction - false because 0 > 0 is false, actual output - false.
console.log(null > 0);
//12.prediction - false because NaN is not equal to itself, actual output - false.
console.log(NaN == NaN);
//13.prediction - false because NaN is never strictly equal to itself, actual output - false.
console.log(NaN === NaN)
//14.prediction - false because NaN is never strictly equal to itself, actual output - false.
console.log(Object.is(NaN, NaN))
//15.prediction - true because +0 and -0 are considered equal in strict comparison, actual output - true.
console.log(+0 === -0)
//16.prediction - false because Object.is distinguishes between +0 and -0, actual output - false.
console.log(Object.is(+0, -0))
//17.prediction - true because the array is converted to the string "1,2,3", actual output - true.
console.log([1,2,3] == "1,2,3")
//18.prediction - true because an empty array becomes an empty string, which converts to 0 and false also converts to 0, actual output - true.
console.log([] == false)
//19.prediction - true because an empty array becomes an empty string and then 0, actual output - true.
console.log([] == 0)
//20.prediction - true because [0] converts to "0", which becomes 0, and false also converts to 0, actual output - true.
console.log([0] == false)

//partB
let currentEmail = "owethujezile@gmail.com";
let confirmEmail = prompt("Confirm your email:") === currentEmail ? "Email confirmed" : "Emails do not match";
console.log(`${confirmEmail}`);
let newPassword = prompt("Enter a new password:").length >=8 ? "Password is valid" : "Password must be at least 8 characters long";
console.log(`${newPassword}`);
let newPassword2 = prompt("please re enter new password for final check") !== currentEmail ? "Password confirmed" : "Passwords must not be the same as the email";
console.log(`${newPassword2}`);
let confirmPassword = prompt("Confirm your new password:") === newPassword ? "Password confirmed" : "Passwords do not match";
console.log(`${confirmPassword}`);
