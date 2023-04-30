// if-else

if(4===9){
    console.log('все тип топ');
} else{
    console.log('все плохо');
}

if(4){
    console.log('все тип топ');
} else{
    console.log('все плохо');
}

let num = 40;

if(num < 49){
    console.log('Error');
} else if(num > 100){
    console.log('Some big number');
} else {
    console.log('OK');
}

// теринарний оператор

let num1 = 39;
(num1 === 50) ? console.log('OK') : console.log('Error');

// switch виокристовується коли нас цікавить прчме порівняння з рядом мождивих знаечень
// switch case

let number3 = 520;
switch(number3){
    case 49:
        console.log('Your value is 49');
        break;
    case 50:
        console.log('Your value is 50');
        break;
    case 51:
        console.log('Your value is 51');
        break;
    case 52:
        console.log('Your value is 52');
        break;
    default:
        console.log('This is default');
        break;
}

//якщо купуєте БМВ, то виводити консоль Я тепер власник БМВ
// (аналогічно для Ауді, Мерседес, Форд)

let car = 'BMW';
switch(car){
    case 'BMW':
        console.log('Я тепер власник БМВ');
        break;
    case 'Audi':
        console.log('Я тепер власник Audi');
        break;
    case 'Mercedes':
        console.log('Я тепер власник Mercedes');
        break;
    case 'Ford':
        console.log('Я тепер власник Ford');
        break;
    default:
        console.log('Я тепер хожу пішки');
        break;
}