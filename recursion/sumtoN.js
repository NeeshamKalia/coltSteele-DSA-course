 // Write a function to print sum of n natural numbers using recursion



console.log(um(4))


//functional
function sum (n){
    if(n==0) return 0;
    return (n+ sum(n-1) )
}


//parametrized
const um = (n,sum=0) => {
    if(n===0) return sum;
    return ( um(n-1, sum+n))
}
