/* Start Header */
// Create the elements
let nav = document.createElement("div");
let logo = document.createElement("h2");
let ul = document.createElement("ul");
let li = document.createElement("li");


// Create the text node for elements 
let logoText = document.createTextNode("LOGO");
let navItems = ["Home", "About", "Service", "Contact"];

// Append elements in the body
logo.append(logoText);
nav.appendChild(logo);
for (let index = 0; index < navItems.length; index++) {
    let linkText = document.createTextNode(navItems[index]);
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    let li = document.createElement("li");
    link.append(linkText);
    li.appendChild(link);
    ul.appendChild(li);
}
nav.appendChild(ul);
document.body.appendChild(nav);

// Add css style
document.body.style.cssText = "margin: 0;";
nav.style.cssText = "display: flex; align-items: center;justify-content: space-between; padding: 0 15px; height: 70px; ";
logo.style.cssText = " margin: 0;height: 70px; color:#01d28e;display: flex;align-items: center;";
ul.style.cssText = "margin: 0;height: 70px;padding: 0;list-style: none;display: flex;align-items: center;";
li.style.cssText = "height: 70px;";
let links = document.querySelectorAll("a");
for (let index = 0; index < links.length; index++) {
    links[index].style.cssText = "padding:0 20px;color:#777;text-decoration: none;";
}
/* End Header */

/* Start Content */
  //Create elements
let content = document.createElement("div");
let productsList = document.createElement("div");
let product, productNumber, productTitle,titleText;

//Create product elements and append into Products List
for (let index = 0; index < 15; index++) {
    product = document.createElement("div");
    productNumber = document.createElement("h2");
    productTitle = document.createElement("span");
    productNumber.append(`${index + 1}`);
    titleText = document.createTextNode("Product");
    productTitle.append(titleText);
    product.style.cssText = "background-color: white;border-radius: 4px;display: flex;flex-direction: column;justify-content: center;align-items: center;padding: 20px";
    productNumber.style.cssText = "margin: 0;";
    productTitle.style.cssText = "padding-top: 8px;color: #777";
    product.appendChild(productNumber);
    product.appendChild(productTitle);
    productsList.appendChild(product);
}


 // Append elements (Product) into Product List

document.body.appendChild(content);
content.appendChild(productsList);

// Css Style
content.style.cssText = "min-height: calc(100vh - 140px);background-color: #eee;padding: 15px;";
productsList.style.cssText = "display: grid; grid-template-columns: repeat(auto-fill,minmax(250px,1fr));gap: 10px;";

/* End Content */

/* Start Footer */

let footer = document.createElement("div");
let footerContent = document.createElement("p");
let footerText = document.createTextNode("CopyRight 2022");
footerContent.append(footerText);
footer.appendChild(footerContent);
document.body.appendChild(footer);
footer.style.cssText = " background-color: #00806d;color: white; height: 40px;display: flex;align-items: center;";
footerContent.style.cssText = "margin: 0 auto;width:125px;";

/* End Footer */

