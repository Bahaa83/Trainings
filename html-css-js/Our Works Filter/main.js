const switcher = document.querySelectorAll(".switcher ul li");
const gallery =[...document.querySelectorAll(".gallery div")];


checker();

switcher.forEach((li) => {
    li.addEventListener("click", (e) => {
        let dataCate = e.currentTarget.getAttribute("data-cate");
        galleryFilter(dataCate);
    });
})


function galleryFilter(dataCate) {
    let galleryItems = gallery.filter((li) => {
        return li.getAttribute("data-cate") === dataCate;
    });
    gallery.forEach((li) => {
        li.style.display = "none";
    })
    galleryItems.forEach((li) => {
        li.style.display = "flex";
    });
}

function checker() {
    switcher.forEach((li => {
    li.addEventListener("click", (e) => {
        switcher.forEach((li) => {
            li.classList.remove("active");
        });
    });
}));
}
