let btn=document.getElementById('my-btn')
let count=0
btn.addEventListener('click',()=>{
    count++;
    btn.textContent=count
})