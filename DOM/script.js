// alert("test")

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
let mainEl = document.querySelector("main")
console.log(mainEl)
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks</h1>"
mainEl.classList.add("flex-ctr")

let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-arround")


for(let i = 0; i< menuLinks.length; i++){
topMenuEl = document.getElementById("top-menu");
let newElement = document.createElement('a');
newElement.setAttribute("href", menuLinks[i].href);
newElement.innerHTML = menuLinks[i].text;
topMenuEl.appendChild(newElement);

}

//Task 4.0
let subMenuEl = document.getElementById("sub-menu")

subMenuEl.style.height = "100%"
subMenuEl.style.backgroundColor ="var(--sub-menu-bg)"
subMenuEl.classList.add("flex-arround")
subMenuEl.style.position = "absolute"
subMenuEl.style.top = "0"
//Task 5.0
let topMenuLinks =document.querySelectorAll("newElement")
console.log("top-menu<a>elements...", topMenuLinks)
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(event) {
  
  event.preventDefault()
  let target = event.target
  console.log(target)
  if (target.tagName != 'A') {
    return
  }
  if (target.classList.contains('active')) {
    target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')
  }
  target.classList.add('active')

  var links
  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].text == target.textContent) {
      links = menuLinks[i]
      console.log('link shows...', links)
      if ('subLinks' in menuLinks[i]){
        showingSubMenu = true
      } else {
        showingSubMenu = false
      }
    }
  }
  console.log(showingSubMenu)

  if (showingSubMenu) {
    buildSubMenu(links)
    subMenuEl.style.top = "100%"
  } else {
    subMenuEl.style.top = "0"
  }
})


function buildSubMenu (takesLinks) {
  subMenuEl.textContent = ""
  for (let i = 0; i < takesLinks.subLinks.length; i++) {
    var a = document.createElement('a')
    a.setAttribute('href', takesLinks.subLinks[i].href)
    a.textContent = `${takesLinks.subLinks[i].text}`
    subMenuEl.appendChild(a)
  }

  console.log('sub menu shows...', subMenuEl)

}

subMenuEl.addEventListener('click', function(event) {

  event.preventDefault()
  let target = event.target
  console.log("testing subMenuEl <a>...", target)
  if (target.tagName != 'A') {
    return
  }

  showingSubMenu = false
  subMenuEl.style.top = '0'

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')
  }

  mainEl.innerHTML = `<h1>${target.textContent}</h1>`
})







