let countInput = document.querySelector(".count-Input");
let maxLength = countInput.getAttribute("max-length");
let border = document.querySelector(".fill-border");
let counter = document.querySelector(".counter"); 



countInput.oninput = () => {
    if (countInput.value.length <= maxLength) {
        counter.textContent = maxLength - countInput.value.length;
        border.style.width = `${(countInput.value.length * 100) / maxLength}%`;
    }

}
