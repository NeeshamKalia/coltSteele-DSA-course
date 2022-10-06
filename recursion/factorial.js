//write a function to get the factorial of N

function factorial(n){
    if(n<=1) return 1;
    return ( n * factorial(n-1))


}


function fac  (n, fact=1)  {
    if(n===0) return fact;
    return (fac(n-1,  fact * n))
}




console.log(fac(5))




// O(n) O(n) for both;
