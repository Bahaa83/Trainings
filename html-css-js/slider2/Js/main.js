

let currentList = 1;
let cardLists = document.querySelectorAll(".cards-list");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let paginationitems = document.querySelectorAll(".pagination .pagi-item");
console.log(paginationitems)

checker();
nextBtn.onclick = () => {
    if(currentList < 3 )
    {
        currentList += 1;
        checker();
    }
}

prevBtn.onclick = () => {
    if(currentList > 1 )
    {
        currentList -= 1;
        checker();
    }
}


function checker() {
    
        cardLists.forEach((el) => {
            el.classList.remove("active");
        })
    
    cardLists[currentList - 1].classList.add("active");
    paginationitems.forEach((el) => {
        el.classList.remove("active");
    })
    paginationitems[currentList - 1].classList.add("active");
    
        if (currentList == 1) {
            prevBtn.classList.add("disable");
            nextBtn.classList.remove("disable");
            nextBtn.classList.add("active");

    }
        if (currentList == 2) {
            prevBtn.classList.remove("disable");
            prevBtn.classList.add("active");
            nextBtn.classList.add("active");
            nextBtn.classList.remove("disable");
    }
        if (currentList == 3) {
            prevBtn.classList.remove("disable");
            nextBtn.classList.remove("active");
            nextBtn.classList.add("disable");
    }

}

paginationitems.forEach((el) => {
    el.addEventListener("click", (e) => {
    for (let i = 0; i < paginationitems.length; i++) {
        paginationitems[i].classList.remove("active");
        } 
        el.classList.add("active");  
        currentList = parseInt(e.currentTarget.id);
        checker();
    });
});

