const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();//브라우저의 default행동을 막아줌(ex:새로고침)
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
//submitEvent는 엔터 또는 버튼을 누를 때 발생
//브라우저는 handler를 호출할 때 해당 event object를 첫번째 argument로 넘겨줌.