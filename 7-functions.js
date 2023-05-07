let a = 5;
let b = 3;
let c;

console.log(c);

/// some code

a = 8;
b = 12;

c = a + b;
console.log(c);

function sum (a, b){ /// imenovana funkcia
    return c;
    console.log(c);
}

sum(8, 12);
sum(10, 10);
sum(150125, 200);

/// anonimna funkcia

function sum (a, b){ 
    let c = a + b;
    console.log(c);
}

const anonimFunc = function (a, b){ 
    let c = a + b;
    console.log(c);
}

anonimFunc(2, 23);

const anonimFunc1 = (a, b) => { /// strilochna funkcia
    let c = a + b;
    console.log(c);
};

anonimFunc1(2, 23);


const functDefParam = (a, b = 2) => {
    return (a * b)
}

console.log(functDefParam(3, 5));
console.log(functDefParam(3));

console.log(Date());

const myReqWhithDate = (field1, timestamp = Date()) => {
    let reqBody = {
        someData: 1
        someData2: 2
        timestamp: ''
    };
    
    reqBody.someData = field1;
    reqBody.timestamp = timestamp;
    
    return reqBody;

}

console.log(myReqWhithDate('fff', '22336665541'));

const play = () => {
    for(let i =0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'bybyby'
        }
    }
}

console.log(play());


/// Callback - shtychna zatrumka

function first(){
    setTimeout(function(){
        console.log('First');
    }, 5000);
}

function second(){
    console.log('Second');
}

first();
second();

function someFunc(){
    console.log('Hello');
}
setTimeout(someFunc, 5000)


function someFuncWithCallback(param1, callbackFunc){
    console.log(`Here is my parametr: ${param1}`);
    callbackFunc();
}

someFuncWithCallback('parampassd', function(){
    console.log('Text from callback');
})