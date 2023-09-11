console.log("The grenade was detonated and was ready to bang in")
const button=document.querySelector('.blast')
let timeouts=[]
let allowLogging=true
function bang(time,info){
    if(allowLogging){
    const timeout=setTimeout(()=>{
        console.log(info)
    },time)
    timeouts.push(timeout)
}
}




function boom(){
    clearTimeouts()
    allowLogging=true
bang(3000,'1')
bang(2000,'2')
bang(1000,'3')
bang(3500,'BOOOOOOOOOM!!')
}
button.addEventListener('click', boom)

 
function bombsquad(){
    allowLogging=false
    clearTimeouts()
    console.log("Bomb goes Thuuussss!")
}


document.querySelector('.thuuss').addEventListener('click', () => {
    bombsquad()
    })

    function clearTimeouts(){
        for(const timeout of timeouts){
            clearTimeout(timeout)
        }
    }








/*
const stop=setInterval(function(){  //setInterval is here we set a time 1000ms(1sec)..so for every 1sec Interval will be printed forever.
    console.log('Interval');
},1000);

setTimeout(function(){
    clearInterval(stop)             //To stop printing forever..using clearInterval assisting setTimeout..we stopped setInterval after 10sec.
},10000)*/