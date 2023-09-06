function getPromise(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Resolved!');
        },2000);
});
}
function Then(){
    getPromise().then((result)=>{
        console.log(result)
    });
}
async function Await(){
    const result = await getPromise()
        console.log(result)
}
Then()
Await()