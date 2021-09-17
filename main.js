const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const checkBox = $("#checkbox");
const body = $("body");
const h2 = $$("h2");
const h3 = $$("h3");
const p = $$("p");
const att = $(".attribution");
const gridItem = $$(".grid-item");

function darkMode() {
  if (checkBox.checked) {
    body.classList.add("darkBG");
    att.classList.add("darkP");
    for (let i of h2) {
      i.classList.add("darkH");
    }
    for (let i of h3) {
      i.classList.add("darkH");
    }
    for (let i of p) {
      i.classList.add("darkP");
    }
    for (let i of gridItem) {
      i.classList.add("darkCard");
    }
  }
  if (!checkBox.checked) {
    body.classList.remove("darkBG");
    att.classList.remove("darkP");
    for (let i of h2) {
      i.classList.remove("darkH");
    }
    for (let i of h3) {
      i.classList.remove("darkH");
    }
    for (let i of p) {
      i.classList.remove("darkP");
    }
    for (let i of gridItem) {
      i.classList.remove("darkCard");
    }
  }
}
checkBox.onclick = darkMode;
