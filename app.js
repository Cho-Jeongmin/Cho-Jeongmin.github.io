// block 주석 단축키 : Shift + Alt + A

/*

변수로?
const playerName = "nico";
const playerPoints = 100;
const playerHandsome = true;
const palyerFat = "little bit";

배열로?
const player = ["nico", 100, true, "little bit"];

*/


// Object로!
const player = {
    name: "nico",
    points: 100,
    fat: true,
};

console.log(player);

console.log(player.name);       //property 접근
console.log(player["name"]);    //property 접근

player.fat = false; //수정 가능 (object 자체를 수정하려하면 에러.)
player.lastName = "potato"; //property 추가 가능
player.points = player.points + 10;

console.log(player);

