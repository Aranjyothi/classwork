// h1 tag

let h1tag = (document.getElementById('title'));
console.log(h1tag.textContent);
h1tag.textContent = 'DOM Practice';
h1tag.style.textAlign = "center";

// p tag

let ptag = (document.querySelector("p"));
ptag.style.color = 'blue';


// set attribute to a tag
let aEl = document.querySelector("a");
aEl.setAttribute("href", "https://www.google.com");

//  
//classlist: classList.add, classList.remove, classList.toggle

// console.log(ptag.classList);
// ptag.classList.add("special"); // add clase special to p tag

// ptag.classList.remove("special"); // remove class special from p tag

// ptag.classList.toggle("special"); // toggle class special from p tag

// ptag.classList.contains("special"); // check if p tag has class special

// ptag.classList.replace("special", "special2"); // replace class special with special2
//

// ****** selectiing multiple elements ******

//By tag name
let liTags = document.getElementsByTagName("li");
console.log("By tag name method: ", liTags);

//By class name
let liTags2 = document.getElementsByClassName("comment");
console.log("By class name: ", liTags2);

// by querySelectorAll
let liTags3 = document.querySelectorAll(".comment");

// for of loop change size of comment elements to 30px
for(let li of liTags3) {
    li.style.fontSize = "30px"
}








// //console.log(document.getElementById("title"))
// let h1Tag = document.getElementById("title")
// let pTag = document.querySelector("p")
// //let pEl = document.querySelector(".cool")
// let pEl = document.querySelector("p-tag")
// // console.log(pTag)
// console.log(h1Tag)
// console.log(pEl)
// //console.log(h1Tag.innerText)
// console.log(h1Tag.innerHTML)
// //onsole.log(pTag.innteText)
// console.log(pTag.innerHTML)
// console.dir(pTag)

// h1Tag.style.textAlign = "center"
// h1Tag.style.color = "brown"
// pTag.style.color = "yellow"
// /*
// ​
// REVIEW:
// ​
// There is a special document keyword (represents the DOM)
// ​
// We can use methods to select specific elements:
//     - getElementById
//     - querySelector
//     - setAttribute
// ​
// Access the text and innerHTML of an element with:
//     - textContent
//     - innerHTML
// ​
// The style property (object) can be used to make changes in CSS
//     - style
// ​
// It has a bunch of properties that represent CSS Properties for that element
//     - color
//     - backgroundColor
//     - textAlign

        // using classList. to modify classes in JS
        // ptag.classList.add("my-second-class")
        // ptag.classList.remove("my-second-class")
        // ptag.classList.toggle("my-second-class")
        // ptag.classList.contains("my-second-class")
        // ptag.classList.replace("my-second-class")
// ​*/
// let alink = document.querySelector("a")
// alink.setAttribute('href',"https://www.google.com")


// // selecting multiple elements by tag name
// let liTags = document.getElementsByTagName("li")
// ​console.log("byTagName method: ", liTags)

// // selecting multiple elements by className
// let liTags2 = document.getElementsByClassName("comment")

// console.log("byClassName method: ", liTags2)

// console.log(liTags2[0])
// // selecting multiple elements by whatever you like
// let liTags3 = document.querySelectorAll(".comment")

// console.log(liTags3)
// // we can iterate over our array of elements 
// // (HTMLCollection or NodeList)

// console.log('looping with for of...')
// // with a for of loop...
// for (let li of liTags3) {
//     console.log(li)
// }

// console.log('looping with for loop...')
// // with a regular for loop...
// for (let i = 0; i < liTags3.length; i++) {
//     console.log(liTags3[i])
// }

// console.log('looping with forEach...')
// // with a forEach array method
// liTags3.forEach((element) => console.log(element))

// for(let comment4 of liTags3){
//     comment4 = styles.fontSize = "30px"
// console.log(comment4)
// }