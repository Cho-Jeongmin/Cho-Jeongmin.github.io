//함수 작성
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I am " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(a, b){
    console.log(a + b);
}

plus(); //인자를 안넣으면NaN (Not a Number)라고 출력됨
plus(60, 8);

function divide(a, b){
    console.log(a/b);
}

divide(98, 20);

//객체안에 함수 생성
const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("Lynn");