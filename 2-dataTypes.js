/*
    ----------------------------------
    1. Прості типи або примітивні
        - string (текст)
        - number (число)
        - boolean (логічний тип)
        - null
        - undefined
        - Sympol
        - bigint
    2. Об'єкти
        - об'єкт {}
        - масиви
        - об'єкт дати
        - регулярні вирази
        - Помилки 
    -----------------------------------
*/

let number = 5;

let floatNumber = 5.5;

// infiniti (безкінечність) and NaN

console.log(4/0);
console.log(-4/0);

console.log(4/'Max');

// boolean

let isExist = true; // false

// null - нічого, undefined - немає ніякого значення

console.log(qwqwqw);

let value = null;
console.log(value);

let value2;
console.log(value2);

// Об'єкти object

let obj = {};
let person = {
    name: "Dima",
    age: 30
}
console.log(person);

let person1 = new Object{};
person1.name = "Pasha";
person1.age = 25;
console.log(person1);

console.log(`Name: ${person1.name}`);

// array massiv

let arr = ['text', 25, {name: 123},[]];
//console.log(arr);
console.log(arr[0]);
console.log(arr[3]);

let numArr = [1,2,3];
let numObj = {a:1,b:2,c:3};

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 2000
};

let salaryArr = ['Anna', 1000, 'Vlada', 2000];

let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 2000
};

console.log(salaryArr[0]);
console.log(someArrObj[0]);

let someArrObj1 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 2000
};
console.log(someArrObj1.a);

someArrObj1.b = 2000; // змінили значення для b
console.log(someArrObj1.b);

// 

let someText = " Hello, world!!";
console.log(someText.length);
console.log(someText.substring(0,6));
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());
console.log(someText.indexOf('o'));
console.log(someText.trim());
console.log(someText.charAt(5));
console.log(someText[1]);

// massive

let myArr = [];

myArr.push("Dobrogo");
myArr.push("vechora");
console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(", "));
console.log(myArr.pop());

// object

let newObj = {
    a: 25,
    b: 35,
    c: 'Dodik'
};

console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);

// number

let someNum = 12.6;
console.log(Math.round(someNum));

let resolution = '12.2px';
console.log(parseInt(resolution));
console.log(parseFloat(resolution));