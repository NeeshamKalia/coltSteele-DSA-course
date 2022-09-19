//Write a function to countdown from n to 1

function countdown (n){
    if(n<=0){return 0}
    console.log(n)
    return countdown(n-1)
}

console.log(countdown(4))
