let toggle = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
let closeBtn = document.querySelector(".close");

toggle.onclick = () => {
    nav.classList.add("open");
}
closeBtn.onclick = () => {
    nav.classList.remove("open");
}

document.onkeyup = (e) => {
    if (e.code == "Escape") {
        nav.classList.remove("open");
}
    
}