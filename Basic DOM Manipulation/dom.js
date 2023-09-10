console.log(document.querySelector('.one'))    //Accessing class one 

const head=document.querySelector('h2')         //Accessing h2
console.log(head.textContent)   //textContent prints the content in h2.
const p1=document.querySelector('p')        //There are teo p's in code..but returns the <p> which occurs first
//If we need to access all <p>'s present in code..then use querySelectorAll
const pp=document.querySelectorAll('p');
//If we need to access <p> of class two..then
const p2=document.querySelector('.two p')
//insertAdjacentText(position,data) is to insert data wherever we want.
head.insertAdjacentText('afterbegin','1.')
p2.insertAdjacentText('beforeend',' emo')
console.log(p2.innerHTML);    //innnerHTML is what the tag is containing
console.log(head.outerHTML)   //outerHTML is also like a innerHTML but also includes tags.
console.log(head.innerText)
console.log(head.textContent)