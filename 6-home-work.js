//  1. Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgers = 4;
let fries = 1;

if(hamburgers >= 4 && fries >= 1){
    console.log('Ми поїли');
} else{
    console.log('Ми йдемо в інше кафе');
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль

let num = 1000;

if(num >= 1000 && num <= 1900){
    console.log('It`s OK');
} else {
    console.log('It`s not OK');
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let num1 = 999;

if(!(num1 >= 1000 && num1 <= 1900)){
    console.log('Не знаходиться');
} else {
    console.log('Знаходиться');
}

let num2 = 1900;

if(num2 < 1000 || num2 > 1900){
    console.log('Все ок');
} else {
    console.log('Все не ок');
}


// 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//    Результат виводити в консоль.

let month = 2;

if(month >= 1 && month <= 2 || month === 12){
    console.log('Winter');
} else if (month >=3 && month <= 5){
    console.log('Spring');
} else if (month >= 6 && month <= 8){
    console.log('Summer');
} else if (month >= 9 && month <= 11){
    console.log('Autumn');
} else {
    console.log('It`s not a month');
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 60;
let b = 30;
let c = 20;

if (a > b){
    if(a < c){
        console.log(a);
    }else if(b > c){
        console.log(b);
    }else{
        console.log(c);
    }
} else {
    if(a > c){
        console.log(a);
    }else if(b < c){
        console.log(b);
    }else{
        console.log(c);
    }
}

// Тут було дуже важко, знайшов приклад в інтернеті і адаптував під нас(


// 6. Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.

let day = 2;

switch(day){
    case 1:{
        console.log('Понеділок');
        break;
    }
    case 2:{
        console.log('Вівторок');
        break;
    }
    case 3:{
        console.log('Середа');
        break;
    }
    case 4:{
        console.log('Четверг');
        break;
    }
    case 5:{
        console.log('П`ятниця');
        break;
    }
    case 6:{
        console.log('Субота');
        break;
    }
    case 7:{
        console.log('Неділя');
        break;
    }
    default:{
        console.log('Не день тижня');
        break;
    }
}

// 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// Математичні операції для обчислення: "+", "-", "*", "/".
// Результат виводити в консоль.

let numOne = 20;
let numTwo = 30;
let mathOper = '*';

switch (mathOper){
    case "+":{
        console.log(numOne + numTwo);
        break;
    }
    case "-":{
        console.log(numOne - numTwo);
        break;
    }
    case "*":{
        console.log(numOne * numTwo);
        break;
    }
    case "/":{
        console.log(numOne / numTwo);
        break;
    }
    default:{
        console.log('Not math operation');
    }
}

// 8. Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = 'regular expression';
let without = word.replace(/[aeiou]/gi, '')
console.log(without);

// 9. Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//    так щоб в консоль виводився результат обчислень з правильним закінченням.
//    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

// let meters = 368365;
// let kilometers;

// if(meters > 1000){
//     kilometers = meters / 1000;
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометра(ів)");
// } else if (meters === 1000) {
//     kilometers = meters / 1000;
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометр");
// } else if(meters < 1000) {
//     kilometers = meters / 1000;
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометра");
// } else {
//     console.log('Not a number');
// }

// let meters = 2000;
// let kilometers = meters / 1000;

// if(kilometers % 1 === 0){
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометрів");
// } else if(kilometers % 1 !==0) {
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометра");
// } else if(kilometers === 1000){
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометр");
// }

// let meters = 2002;
// let kilometers = meters / 1000;

// if(kilometers === 1.000){
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометр");
// } else if (kilometers % 10 === 2 || kilometers % 10 === 3 || kilometers % 10 === 4){
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометри");
// } else if (kilometers % 10 === 5 || kilometers % 10 == 6 || kilometers % 10 === 7 || kilometers % 10 === 8 || kilometers % 10 === 9){
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометрів");
// } else if(kilometers % 1 !==0) {
//     console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометра");
// }


let meters = 23565;
let kilometr = 1000;
let valueInKilometr = meters / kilometr;
let lastDigitInMeters =  meters%10;
let firstWord = '';
let secondtWord = '';

    if (lastDigitInMeters === 1) {
         firstWord = ' метр';
         secondtWord = ' кілометр';
    }
    else if(lastDigitInMeters === 2 || lastDigitInMeters === 3 || lastDigitInMeters === 4) {
         firstWord = ' метра';
         secondtWord = ' кілометри';
    }
    else if (lastDigitInMeters === 5 || lastDigitInMeters === 6 || lastDigitInMeters === 7 || lastDigitInMeters === 8 || lastDigitInMeters === 9){
         firstWord = ' метрів';
         secondtWord = ' кілометрів';
    } 

    let result =  meters +  firstWord + ' це ' + valueInKilometr.toFixed(3) + secondtWord
    console.log(result);