// alert("test")
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
let mainEl = document.querySelector("main")
console.log(mainEl)
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks</h1>"
mainEl.classList.add("flex-ctr")

let topmainEl = document.getElementById("top-menu")
topmainEl.style.height = "100%"
topmainEl.style.backgroundColor = "#0e9aa7"
topmainEl.classList.add("flec-arround")