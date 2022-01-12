const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize(){
    //body,head, title 이런 것들은 document.뫄뫄 로 가져올 수 있음
    document.body.style.backgroundColor = "skyblue";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no wIFI");
}

function handleWindowOnline(){
    alert("All GOOOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//h1.onclick = handleTitleClick; 이런식으로도 이벤트 감지 가능, but
//addEventListener 사용시 나중에 removeEventListener를 할 수 있어서 좋음

//window객체(document처럼 이미 존재)
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);