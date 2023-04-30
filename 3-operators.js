console.log('arr' + ' - object');
console.log(2+2);
console.log(2 + '2');
console.log(2 + + '2');

// Інкеримент та декримент збільшують або зменшують елемент на одиницю

let incr = 10;
let decr = 10;


// постфіксна
incr++;
decr--;
console.log(incr);
console.log(decr);

// префіксна

let incr1 = 10;
let decr1 = 10;
++incr1;
--decr1;
console.log(incr1);
console.log(decr1);

let incr2 = 10;
let decr2 = 10;
console.log(incr2++);
console.log(decr2--);
console.log(++incr2);
console.log(--decr2);

console.log(5 < 2);
console.log(5%2);

//Оператор порівняння
console.log(2*4 = 8); // не буде працювати
console.log(2*4 == 8); // працює порівняння
console.log(2*4 == '8');
console.log(2*4 === '8'); // строге порівняння
console.log(2*4 === 8); // строге порівняння

// оператор І та АБО

let isCheked = true;
let isClosed = true;

console.log(isCheked && isClosed); // логічне і, обидва мають бути тру
console.log(isCheked || isClosed); // логічне або, хоч один має бути тру

// оператор заперечення НЕ !

let isCheked1 = true;
let isClosed1 = false;

console.log(isCheked1 && !isClosed1);
console.log(!isCheked1 || isClosed1);

let hamburger = true;
let fries = true;

if (hamburger&&fries){
    console.log('я ситий');
}

let hamburger1 = 5;
let fries1 = 1;

if (hamburger1&&fries1){
    console.log('я ситий');
}

let hamburger2 = 5;
let fries2 = 1;
console.log(hamburger2&&fries2); // повертає сотаннє значення

// завжди повертає фолс - 0, "", null, unefined, NaN


// хочемо щоб були або 3 гамбургери та кола або 
// 2 порції нагетсів і дві картоплі фрі

let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries3 = 1;

if(hamburgers >= 3 && cola || nuggets >= 2 && fries3 >= 2){
    console.log('All eating');
}