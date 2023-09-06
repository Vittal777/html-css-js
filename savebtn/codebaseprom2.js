function getPromise(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Resolved')
    },2000);
});
}

function Then(){
    getPromise().then((result)=>{
    console.log(`Resolved : ${result}`)
}).catch((error)=>{
    console.log(`Rejected : ${error}`)
});
}
async function Await(){
    try{
        const result= await getPromise()
        console.log(`Resolved : ${result}`)
    }catch(error){
            console.error(`Rejected : ${error}`)
    }
}
Then()
Await()