//alert('test')
const btn = document.querySelector('button')
btn.addEventListener("click",function(event){
//tsting
console.log(event)
const li = document.createElement('li')
console.log(li)
const input = document.querySelector('input')
console.log(input)
console.log(input.value)

li.textContent = input.value
// const ul = document.querySelector('ul')
// ul.appendChild(li)// we can write eitherof these ways.
document.querySelector('ul').appendChild(li)
input.value = "";
})
// select the ul tag
const ul = document.querySelector("ul")

// add an event listener to our selected ul
ul.addEventListener("click", handleClick)
//ul.removeEventListener('clicl',handleClick)

function handleClick(event) {
        console.log('clicked on ul...')
        console.log(event)
        console.log(event.target)
        event.target.style.color = 'blue'
    console.log(event.target)
    
        console.log('clicked on...', event.target.tagName)
    
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"
        }
    
        if (event.target.tagName === "UL") {
            event.target.style.backgroundColor = "red"
        }
    }

