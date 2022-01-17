const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";//string만 담는 변수 이름 주로 대문자로 씀
const USERNAME_KEY = "username";

function onLoginSubmit(event) { //제출 함수
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() { //인삿말
    const username = localStorage.getItem(USERNAME_KEY);//argument없애고 직접 찾기
    greeting.innerText = `Hello ${username}!`;  //innerText를 추가하고
    greeting.classList.remove(HIDDEN_CLASSNAME);//greeting을 보이게하기
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){ //이미 저장된 유저명이 없으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);   //폼을 보이게하고
    loginForm.addEventListener("submit", onLoginSubmit);    //제출 진행
} else {    //이미 저장된 유저명이 있으면
    paintGreetings();  //인삿말
}