function pow(m,n){

    
    if(n==0){return 1}

    else if(n<1) return
    else return (pow(m,n-1)* m)
}
let x = 2, n = -2;
if(n<0) x = 1/x;

console.log(pow(x,n))
