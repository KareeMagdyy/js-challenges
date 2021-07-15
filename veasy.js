// #1
function addition(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'Enter a valid number!';
    }
        return a + b;
}

//#2
function convert(minutes){
    return minutes * 60;
}

//#3
function addition(num) {
	return num +1;
}

//#4
function triArea(base, height) {
	return base * height /2;
}

//#5
function calcAge(age) {
	return age * 365;
}

//#6
function cubes(a) {
	return a ** 3
}

//#7
function getFirstValue(arr) {
	return arr[0];
}

//#8
function circuitPower(voltage, current) {
	return voltage * current;
}

//#9
function howManySeconds(hours){
    let minutes = hours * 60;
    return minutes * 60;
}

//#10
function nextEdge(side1,side2){
    return (side1 + side2) - 1;
}

//#11
function remainder(x , y){
    return x % y;
}

//#12
function findPerimeter(length, width){
    let sum = length + width;
    return 2 * sum;
}

//#13
function giveMeSomething(a) {
	return `something ${a}`;
}

//#14
function squared(a) {
	return a ** 2;
}

//#15
function lessThanOrEqualToZero(num) {
	if (num <= 0){
        return true
    }
    return false
}

//#16
function sumPolygon(n) {
	return (n - 2) * 180;
}

//#17
function points(twoPointers, threePointers) {
	let teamA = twoPointers * 2;
    let teamB = threePointers * 3;
    
    return teamA + teamB;
}

//#18
function nameString(name) {
    return `${name}Edabit`;
}

//#19
function lessThan100(a, b) {
	if (a + b < 100){
        return true;
    }
    return false;
}

//#20
function printArray(number) {
    var newArray = [];
    for(var i = 1; i <= number; i++) {
        newArray.push(i);
    }
    return newArray;
}

  //#21
function animals(chickens, cows, pigs) {
	let chickenLegs = chickens * 2;
    let cowLegs = cows * 4;
    let pigLegs = pigs * 4;
    return chickenLegs + cowLegs + pigLegs;
}

//#22
function and(a, b) {
	if (a === true && b === true){
        return true;
    }
    return false;
}

//#23
function isSameNum(num1, num2) {
	if( num1 === num2){
        return true;
    }
    return false;
}

//#24
function footballPoints(wins, draws, losses) {
	let winP = wins * 3;
    let drawP = draws * 1;

    return winP + drawP;
}

//#25
function convert(hours, minutes) {
	let minHour = hours * 60;

    return (minHour + minutes) *60;
}

//#26
function isSeven(x) {
	if(x === 7 ){
        return true;
    }
    return false;
}

//#27
function checkEquality(a, b) {
    if (a === b){
        return true;
    }
    return false;
}

//#28
function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay ){
        return true;
    }
    return false;
}

//#29
function boolToString(flag) {
	return flag.toString();
}

//#30
function swap(a, b){
	[a, b] = [b, a]

	return [a, b]
}

//#31
function frames(minutes, fps) {
	let sec = minutes * 60;
    return sec * fps;
}

//#32
function calculateFuel(n) {
	if (n > 10){
        return n * 10;
    }
    return 100;
}

//#33
function calculator(str) {
	return eval(str);
}

//#34
function greeting(name) {
    if(name == "Mubashir") {
        return "Hello, my Love!";
    }
    return "Hello, " + name + "!";
}

  //#35
function makesTen(a, b) {
	if (a === 10 || b === 10 || a + b === 10){
        return true;
    }
    return false;
}
//#36
function maxNum(n1,n2) {
	if (n1 > n2) {
        return n1;
	}
	return n2;
}

//#37
function makePair(num1, num2) {
	return [num1,num2];
}

//#38
function comp(str1, str2) {
	if (str1.length === str2.length){
        return true;
    }
    return false;
}

//#39
const arrowFunc = (char)=>{
    return char;
}

//#40
function isEmpty(s) {
	if(s.length <= 0){
        return true;
    }
    return false;
}

//#41
function divisibleByFive(n) {
	if(Number.isInteger(n / 5)){
        return true;
    }
    return false;
}

//#42
function divisible(num){
    if(num % 100 === 0){
        return true;
    }
    return false;
}

//#43
function length(str) {
	return str.length;
}

console.log(length('Kareem'));

//#44
function dividesEvenly(a, b) {
	if(Number.isInteger(a / b)){
        return true;
    }
    return false;
}

//#45
function stringInt(str) {
	return +str;
}
/***Another Method***/
function stringInt(str) {
	return parseInt(str);
}

//#46
function isEven(n) {
    return n % 2 === 0;
}

//#47
function returnNegative(n){
    return -Math.abs(n);
}

//#48
function concatName(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}

//#49
function area(h, w) {
    if(h * w <= 0 ){
        return -1;
    }
    return w * h;
}

//#50
function has_bugs(buggyCode) {
	if (buggyCode === true) {
		return 'sad days';
	}
	return 'it\'s a good day';
}

//#51
function eq(evaluate) {
	return eval(evaluate);
}

//#52
function howManyWalls(n, w, h) {
	let area = w * h;
    let total = n / area;
    if( total < 1){
        return 0;
    }
    return Math.floor(total);
}

//#53
function equation(s) {
	return eval(s);
}

//#54
function leapYear(year) {
	if( year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    return false;
}

//#55
function nthEven(n) {
	if (n % 2 === 0){
        return (n * 2) -2
    }
    return n -1
}

//#56
function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}

//#57
function yearsInOneHouse(age, moves) {
	let houses = moves + 1;
    let years =  age / houses; 
    return parseInt(years);
}

//#58
function valueAt(arr, i) {
	return arr[~~i];
}

//#59
function reverse(arr) {
	return arr.reverse();
}

//#60
function acceptIntoMovie(age, isSupervised) {
	if(age >= 15 || isSupervised === true){
        return true;
    }
    return false;
}

//#61
function shouldServeDrinks(age, onBreak) {
	if(age >= 18 && onBreak === false){
        return true;
    }
    return false;
}

//#62
function format(a, b, c) {
    const template = `Their names were: ${a}, ${b} and ${c}.`;
    return template
}

//#63
const add2 = (x) => x + 2;
const add3 = (x) => x + 3;
const add5 = (x) => x + 5;
const add7 = (x) => x + 7;
const add11 = (x) => x + 11;

//#64
function yeah_nope(bool) {
	return (bool ? 'yeah' : 'nope');
}

//#65
function sumArray(arr) {
	let sum = 0;
    for (i=0; i < arr.length; i++) {
        sum += arr[i]
	}
    return sum
}

//#66
function evenOrOdd(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let total = arr.reduce(reducer);
    if (total % 2 === 0){
        return 'even';
    }
    return 'odd';
}

//#67
function equilibrium(x){
    if (x > 0) return 'positive';
    if (x < 0) return 'negative';
    return true;
}

//#68
function oddOrEven(s) {
	if (s.length % 2 === 0) return true;
    return false;
}

// #69
let a = arr[0];
let b = arr[1];

//#70
function inchesToFeet(inches) {
	let feet = inches / 12;
    if (feet < 1) return 0;
    return feet;
}

//#71
function incrementItems(arr) {
	for (let i = 0; i < arr.length; i++)
		arr[i] += 1
	return arr;
}

//#72
function leapYear(year) {
	if(year % 4 ===0 && year % 100 !== 0) return true;
    return false;
}

//#73
function calculateExponent(num, exp) {
	return num ** exp;
}

//#74
function getLastItem(arr) {
	let lastIndex = arr.length - 1;
    return arr[lastIndex];
}

//#75
//arr= [1, 2, 3, 4, 5, 6, 7, 8]
let first = arr[0];
let second = arr[1];
let third = arr[2];
let others = arr.slice(3);

//#76
function posCom(num) {
	return 2 ** num;
}

//#77
function imposterFormula(i, p) {
	imposter = Math.round(100 * (i / p));
    return `${imposter}%`;
}

//#78
function operate(num1, num2, operator) {
	return eval(`${num1}${operator}${num2}`);
}

//#79
function newWord(str) {
	return str.substring(1);
}

//#80
function flipBool(b) {
	return b == 1 ? 0 : 1;
}

//#81
const helloName = name => `Hello ${name}!`;

//#82
function isEvenOrOdd(num) {
	if(num % 2 === 0) return 'even';
    return 'Odd';
}

//#83
function fiftyThirtyTwenty(ati) {
	let total = {
        Needs: 0.5 * ati,
        Wants: 0.3 * ati,
        Savings: 0.2 * ati
    };
    return total;
}

//#84
function areTrue(a, b) {
	if (a == true) {
		if (b == true) {
			return "both";
		}
		else {
			return "first";
		}
	}
	else if (b == true) {
		return "second";
	}
	else {
		return "neither";
	}
}

//---Ternary Operator---
function areTrue(a, b) {
    return a && b == true ? 'both' : a == true ? 'first' : b == true ? 'second' : 'neither';
}

//#85
function isOdd(num){
    return num % 2 != 0 ? true : false;
}

//#86
function stackBoxes(n) {
	return Math.pow(n, 2);
}

//#87
function repeatString(txt, n) {
	return typeof txt == 'string' ? txt.repeat(n) : 'Not A String !!';
}

//#88
function areaShape(base, height, shape) {
	let triangleArea = 0.5 * base * height;
    let parallelogramArea = base * height;
    return shape === "triangle" ? triangleArea : shape === "parallelogram" ? parallelogramArea : 'Invalid Shape !!';
}

//#89
function arrayToString(arr) {
	return arr.join('');
}

//#90
function concat(arr1, arr2) {
    let arrCon = arr1.concat(arr2)
	return arrCon;
}

//#91
function rotateByOne(arr) {
    let arr1 = arr.pop(arr.unshift(arr[arr.length - 1]));
    return arr;
}

//#92
function findIndex(arr, str) {
	return arr.indexOf(str);
}

//#93
function toNumberArray(arr) {
	let map1 = arr.map(Number);
return map1
}

//#94
function search(arr, item) {
	return arr.indexOf(item);
}

//#95
function word(s) {
	switch(s) {
        case "zero" : return 0;
        case "one" : return 1;
        case "two" : return 2;
        case "three" : return 3;
        case "four" : return 4;
        case "five" : return 5;
        case "six" : return 6;
        case "seven" : return 7;
        case "eight" : return 8;
        case "nine" : return 9;
        default : return 'Thats too high';
    }
}

//#96
function drop(arr, val) {
	return arr.slice(val);
}

//#97
function search(arr, item) {
	return arr.indexOf(item);
}

//#98
function circle_or_square(rad, area){
    const circleC = 2 * Math.PI * rad;
    const squareP = 4 * Math.sqrt(area);
    if (circleC > squareP) return true;
    return false;
}

//#99
function check(arr, el) {
	return arr.indexOf(el) !== -1 ? true : false;
}

//#100
function determineLever(arr) {
	return arr[1] == 'f' ? 'first class lever' : arr[2] == 'f' ? 'second class lever' : arr[0] == 'f' ? 'third class lever' : 'Invalid Entry';
}