window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
});

function elemekElerese1() {
    const ELEM = document.querySelectorAll('#f1')[0];
    console.log(ELEM.innerHTML);
}

function elemekElerese2() {
    const ELEM = document.querySelectorAll('#ide')[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese3() {
    const ELEM = document.querySelectorAll('.ide')[0]
    ELEM.innerHTML = "<p>Jó reggelt!</p>";
}
function elemekElerese4() {
    let txt = "<ul>";
    for (let index = 0; index < 5; index++) {
        
        txt += `<li> ${Math.floor(Math.random() * (30 - 10) + 10)} </li>`
}
    txt += "</ul>";

    ELEM = document.getElementsByClassName('lista')[0]
    ELEM.innerHTML = txt

}
function elemekFormazasa1() {
    ELEM = document.querySelectorAll(".lista")[0];
    ELEM.classList.add("formazott")
}
function esemenyKezeles1() {
    const buttonEl = document.querySelectorAll(".lista")[0];
    buttonEl.addEventListener("click", kattint);

}
function kattint() {
    const buttonEl = document.querySelectorAll(".lista")[0];
    document.getElementsByClassName("kattintasutan")[0].innerHTML = 
    buttonEl.innerHTML;
}

function esemenyKezeles2() {
    ELEM = document.getElementsByClassName("feladat")[0];
    ELEM.innerHTML = "<button>OK</button>"
    ELEM = document.getElementsByClassName("feladat button")[0];
    const buttonELEM = document.querySelectorAll(".feladat button")[0];
    buttonELEM.addEventListener("click", kattint2)


}
function kattint2() {
    const buttonEl = document.querySelectorAll(".feladat")[0];
    document.getElementsByClassName("feladat")[0].innerHTML += 
    buttonEl.innerHTML = "<div><img src = 'kepek/gnome.png' alt = ''></div>";
}


