let cardItems = document.querySelector(".card-items");
let container = document.querySelector(".container");
let total = 0;
window.onload = () => {
    getAllproducts();
}

function getAllproducts() {
    fetch("../Data/products.json").then(response => {
    let result = response.json();
    return result;
    }).then(data => {
        data.length = 10;
        return data
    }).then(allproducts => {
        ProductsLocalStorage(allproducts);
    })
}
function ProductsLocalStorage(allproducts) {
    let cardproducts = [];
    let dataFromLocal = JSON.parse(localStorage.getItem("productsId"));
    allproducts.forEach(product => {
        for (let index = 0; index < dataFromLocal.length; index++) {
            if (product.id === parseInt(dataFromLocal[index]) ) {
                cardproducts.push(product);
        }
        } 
    })
    AddCardItemsToDom(cardproducts);
}

function AddCardItemsToDom(products) {
    products.forEach(item => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", `${item.id}`);
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("title");
        let headerTitle = document.createTextNode(`${item.title}`);
        cardHeader.appendChild(headerTitle);
        /* Create card Image elements */
        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("card-image");
        let img = document.createElement("img");
        img.setAttribute("src", `${item.thumbnail}`);
        imgDiv.appendChild(img);
        let productDesc = `${item.description}`;
        let details = document.createElement("p");
        details.appendChild(document.createTextNode(productDesc));
        cardContent.appendChild(imgDiv);
        cardContent.appendChild(details);
        /* Create card footer elements */
        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        let prise = document.createElement("span");
        let priceText = document.createTextNode(`${item.price}$`);
        prise.classList.add("card-price");
        total += parseInt(`${item.price}`) ;
        /*--Append elements --*/
        prise.appendChild(priceText);
        cardFooter.appendChild(prise);
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        card.appendChild(cardFooter);
        cardItems.appendChild(card);
    });
    /*--Create tatal div and append to DOM --*/
        let totalDiv = document.createElement("div");
        totalDiv.classList.add("total");
        let spanText = document.createElement("span");
        let spanTprice = document.createElement("span");
        let totalText = document.createTextNode("Total:")
        let totalprice = document.createTextNode(`${total}$`);
        spanText.append(totalText);
        spanTprice.appendChild(totalprice);
        totalDiv.appendChild(spanText);
        totalDiv.appendChild(spanTprice);
        cardItems.appendChild(totalDiv);
    /*--Create purchase button and append to DOM --*/
    let purchaseBtn = document.createElement("button");
    purchaseBtn.setAttribute("type", "submit");
    purchaseBtn.appendChild(document.createTextNode("Purchase"));
    purchaseBtn.classList.add("purchase");
    let purchIcon = document.createElement("i");
    purchIcon.classList.add("fa-solid");
    purchIcon.classList.add("fa-credit-card");
    purchaseBtn.appendChild(purchIcon);
    cardItems.appendChild(purchaseBtn);
    
    


}


