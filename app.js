const a = 5;
const b = 2;    //const : 상수 선언. 변경 불가.(보통 상수로 선언)
let myName = "Jeongmin";   //let : 변수 선언. 변경 가능.(필요할 때만 선언)
var c = 3;  //옛날부터 있던 변수형. 변경가능. but, 쓰지 말것.

console.log(a + b);   //콘솔에 출력
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

myName = "Jamie";   //변수 업데이트

console.log("Your new name is " + myName);