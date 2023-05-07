//  1. Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
//     (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

// let hamburgers = 4;
// let fries = 1;

// if(hamburgers >= 4 && fries >= 1){
//     console.log('Ми поїли');
// } else{
//     console.log('Ми йдемо в інше кафе');
// }

/// Через функцію

function McD(hamburgers, fries){
    if(hamburgers >= 4 && fries >= 1){
        console.log('Ми поїли');
    } else{
        console.log('Ми йдемо в інше кафе');
    }
}

McD(4, 1);

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль

// let num = 1000;

// if(num >= 1000 && num <= 1900){
//     console.log('It`s OK');
// } else {
//     console.log('It`s not OK');
// }



const num1 = 1900;

const checkNum = (num1) => {
  if (num1 >= 1000 && num1 <= 1900) {
    console.log('It`s OK');
  } else {
    console.log('It`s not OK');
  }
};

checkNum(num1);


// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

// let num1 = 999;

// if(!(num1 >= 1000 && num1 <= 1900)){
//     console.log('Не знаходиться');
// } else {
//     console.log('Знаходиться');
// }

const checkNum1 = (num1) => {
    if (!(num1 >= 1000 && num1 <= 1900)) {
      console.log('Не знаходиться');
    } else {
      console.log('Знаходиться');
    }
  };
  
  let num1 = 1200;
  checkNum1(num1);

// let num2 = 1900;

// if(num2 < 1000 || num2 > 1900){
//     console.log('Все ок');
// } else {
//     console.log('Все не ок');
// }

const checkNum2 = (num2) => {
    if(num2 < 1000 || num2 > 1900){
        console.log('Все ок');
    } else {
        console.log('Все не ок');
    }
};

let num2 = 1200;
checkNum2(num2);

// 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//    Результат виводити в консоль.

// let month = 2;

// if(month >= 1 && month <= 2 || month === 12){
//     console.log('Winter');
// } else if (month >=3 && month <= 5){
//     console.log('Spring');
// } else if (month >= 6 && month <= 8){
//     console.log('Summer');
// } else if (month >= 9 && month <= 11){
//     console.log('Autumn');
// } else {
//     console.log('It`s not a month');
// }

let checkMonth = (month1) => {
    if(month1 >= 1 && month1 <= 2 || month1 === 12){
        console.log('Winter');
    } else if (month1 >=3 && month1 <= 5){
        console.log('Spring');
    } else if (month1 >= 6 && month1 <= 8){
        console.log('Summer');
    } else if (month1 >= 9 && month1 <= 11){
        console.log('Autumn');
    } else {
        console.log('It`s not a month');
    }
};

let month1 = 5;
checkMonth(month1);

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

// let a = 60;
// let b = 30;
// let c = 20;

// if (a > b){
//     if(a < c){
//         console.log(a);
//     }else if(b > c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// } else {
//     if(a > c){
//         console.log(a);
//     }else if(b < c){
//         console.log(b);
//     }else{
//         console.log(c);
//     }
// }

// Тут було дуже важко, знайшов приклад в інтернеті і адаптував під нас(


function checkNum3(a, b, c){
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
}

checkNum3(10, 30, 20);


// 6. Задано номер дня тижня.
// За заданим номером вивести назву дня тижня використовуючи switch.
// Результат виводити в консоль.

// let day = 2;

// switch(day){
//     case 1:{
//         console.log('Понеділок');
//         break;
//     }
//     case 2:{
//         console.log('Вівторок');
//         break;
//     }
//     case 3:{
//         console.log('Середа');
//         break;
//     }
//     case 4:{
//         console.log('Четверг');
//         break;
//     }
//     case 5:{
//         console.log('П`ятниця');
//         break;
//     }
//     case 6:{
//         console.log('Субота');
//         break;
//     }
//     case 7:{
//         console.log('Неділя');
//         break;
//     }
//     default:{
//         console.log('Не день тижня');
//         break;
//     }
// }

let checkDayOfWeek = (day) => {
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
};

let day = 3;
checkDayOfWeek (day);




// 7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
// Математичні операції для обчислення: "+", "-", "*", "/".
// Результат виводити в консоль.

// let numOne = 20;
// let numTwo = 30;
// let mathOper = '*';

// switch (mathOper){
//     case "+":{
//         console.log(numOne + numTwo);
//         break;
//     }
//     case "-":{
//         console.log(numOne - numTwo);
//         break;
//     }
//     case "*":{
//         console.log(numOne * numTwo);
//         break;
//     }
//     case "/":{
//         console.log(numOne / numTwo);
//         break;
//     }
//     default:{
//         console.log('Not math operation');
//     }
// }

function mathOperValue (numOne, numTwo, mathOper){
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
}

mathOperValue (20, 30, '+');

// 8. Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

// let word = 'regular expression';
// let without = word.replace(/[aeiou]/gi, '')
// console.log(without);

let removeVowels = (word) => {
    return word.replace(/[aeiou]/gi, '');
  };
  
  let word = 'regular expression';
  let without = removeVowels(word);
  console.log(without);  