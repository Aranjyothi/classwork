let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  

    // Part 1
  let main = document.getElementById("main-title")
    main.innerHTML="I like";

    // Part 2
   let main2 = document.querySelector("body")
   main2.style.backgroundColor="lightgray";

    // Part 3
    // let main3 =document.getElementById("favorite-things")
    let list = document.querySelectorAll("#favorite-things li")
    list[list.length-1].remove()
    console.log(list)
    
 
    // Part 4
    let special = document.getElementsByClassName("special-title")
    for(let i = 0; i < special.length; i++){
        special[i].style.fontSize= "2rem";
        special[i].style.color= "red";
    }

    // Part 5
    let dom = document.querySelectorAll("#past-races li")
    for(let i = 0; i < dom.length; i++){
        if(dom[i].textContent == "Chicago"){
            dom[i].remove()
        }
    }
    
    // Part 6
    let dom1 = document.createElement("li")
    dom1.innerText="Bostan";
    let dom2 = document.getElementById("past-races")
    dom2.appendChild(dom1)
    // Part 7
    let city = document.createElement("div")
    let par = document.createElement("p")
    let h1 = document.createElement("h1")
    h1.innerText="NewYork";
    par.innerText="I want to move to NewYork";
       city.appendChild(h1)
       city.appendChild(par)
  let name =document.getElementsByClassName("main")
    name[0].appendChild(city)
  console.log(name[0])
  city.classList.add("blog-post","purple")
 
    // Part 8
  
  let 
    // Part 9
  
  
  
  
  });