
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("nav");
let megaMenu = document.querySelector(".mega-menu");
let content = document.querySelector(".content");
let showPro = document.querySelector(".show-pro");
let toggle = false;
let arr = [];


hamburger.onclick = () => {
    toggle = !toggle;
    if (toggle) {
        megaMenu.classList.remove("close");
        megaMenu.classList.add("open-megaMenu");
    } 
    else {
        megaMenu.classList.remove("open-megaMenu");
        megaMenu.classList.add("close");
    }
}

window.onload = () => {
    fetch("../Data/products.json").then(response => {
    let result = response.json();
    return result;
    }).then(data => {
        data.length = 10;
        return data
    }).then(products => {
        showData(products);
    })
}

        
function showData(products) {
    for (let index = 0; index < products.length; index++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", `${products[index].id}`);
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("title");
        let headerTitle = document.createTextNode(`${products[index].title}`);
        cardHeader.appendChild(headerTitle);
        /* Create card Image elements */
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-image");
        let img = document.createElement("img");
        img.setAttribute("src", `${products[index].thumbnail}`);
        cardContent.appendChild(img);
        /* Create card footer elements */
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        let prise = document.createElement("span");
        let priceText = document.createTextNode(`${products[index].price}$`);
        prise.classList.add("card-price");
        prise.appendChild(priceText);
        cardFooter.appendChild(prise);

        let addToCard = document.createElement("button");
        let addIcon = document.createElement("i");
        addIcon.classList.add("fa-solid");
        addIcon.classList.add("fa-cart-plus");
        let addToCardText = document.createTextNode("Add To Card");
        addToCard.classList.add("add-btn");
        addToCard.appendChild(addToCardText);
        addToCard.appendChild(addIcon);
        cardFooter.appendChild(addToCard);
        addToCard.setAttribute("id", `${products[index].id}`);
        addToCard.addEventListener("click", (e) => {
            arr.push(e.currentTarget.id);
            localStorage.setItem("productsId", JSON.stringify(arr));
            let arrayLength = JSON.parse(localStorage.getItem("productsId"));
            showPro.innerHTML = arrayLength.length;
            showPro.style.opacity = "1";
            addToCard.setAttribute("disabled", "disabled");
            addToCard.classList.add("disable");
        })
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        card.appendChild(cardFooter);
        content.appendChild(card);
    }
}