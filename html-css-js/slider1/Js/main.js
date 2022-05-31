let slideNum = document.querySelector(".slide-number");
let slideItems = Array.from(document.querySelectorAll(".slide-container img"));
let indicators = document.querySelector(".indicators");
let itemsCount = slideItems.length;
let currentSlide = 1;
let nextBtn = document.getElementById("Next");
let prevBtn = document.getElementById("Prev");

nextBtn.onclick = () => {
    if (currentSlide < itemsCount) {
        currentSlide++;
        checker();
    }
};

prevBtn.onclick = () => {
    if (currentSlide > 1) {
        currentSlide--;
        checker();
    }
}

// Create pagination list based on count of images
createPaginationsItems();
let paginationItems = document.querySelectorAll(".indicators ul li");
paginationItems.forEach((li) => {
    li.addEventListener("click", (e) => {
        currentSlide = parseInt(e.currentTarget.id);
        checker();
    });
});
// check slide number and set the active clsses 
checker();


function createPaginationsItems() {
    let paginationUl = document.createElement("ul");
    for (let index = 1; index <= itemsCount; index++) {
    let paginationItem = document.createElement("li");
    paginationItem.appendChild(document.createTextNode(index));
    paginationItem.setAttribute("id", `${index}`);
    paginationUl.appendChild(paginationItem);   
    }
    indicators.appendChild(paginationUl);
}






function checker() {
    removeAllActiveClasses();
    slideItems[currentSlide - 1].classList.add("active");
    paginationItems[currentSlide - 1].classList.add("active");
    slideNum.textContent = `Slide ${currentSlide} of ${itemsCount}`;
    if (currentSlide == itemsCount) {
        nextBtn.classList.add("disabled");
    }
    else {
        nextBtn.classList.remove("disabled"); 
    }
    if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
    }
    else {
        prevBtn.classList.remove("disabled");
    }
}

function removeAllActiveClasses() {
    slideItems.forEach((img) => {
        img.classList.remove("active");
    });
    paginationItems.forEach((li) => {
        li.classList.remove("active");
    });
}   


