//  1.  Ви прийшли в Макдональдз з трьома друзями.
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

if(num >= 1000 || num >= 1900){
    console.log('It`s OK');
} else {
    console.log('It`s not OK');
}