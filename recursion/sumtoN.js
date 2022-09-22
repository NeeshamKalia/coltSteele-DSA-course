// Write a function to print sum of n natural numbers using recursion

function sum (n){
    if(n<=0) return 0
    if(n == 1) console.log(1)
    return (sum(n-1))
}

console.log(sum(4))
