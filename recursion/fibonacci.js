//Write a function that prints out first n fibonacci numbers

const fibonacci = (n) => {
    if(n<=1) return n
    //if(n<= 0) return  0
    return (fibonacci(n-1) + fibonacci(n-2))
}

console.log(fibonacci(4 ))
