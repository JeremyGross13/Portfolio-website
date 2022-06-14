let nav = Document.querySelector("#navArea");
let btn = Document.querySelector(".toggle-btn");
let mask = Document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
}