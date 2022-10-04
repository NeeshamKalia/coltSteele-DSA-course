//1- -----------------print name N times using recursion------------------------

/* function printName(word,n) {
    if(n<=0) return;
    console.log(word)
    printName(word,n-1)
}
printName("th",4) */

//TC is O(n) and S is also O(n) as n no. of function calls and n number of functions in the stack;

//2------------------------- Print 1 to N numbers----------------------

/* function firstN(n,i=1) {
    if(i>n) return;
    console.log(i)
    i++;
    firstN(n,i)
}
firstN(5) */


//------------------print N natural no. in reverse order------------------

/* function reverseN(n) {
    if(n<=0) return
    console.log(n)
    reverseN(n-1)
}
reverseN(4) */


//-----------------------print 1 to N in backtracking--------------------------

/* function backtracking1 (n,i=n){
    if(i<1) return;
    backtracking1(n,i-1)
    console.log(i)
}
backtracking1(53) */


//------------------------ print N to 1 in backtracking------------

/* function   backtracking2 (n,i=1){
    if(i>n) return;
    backtracking2(n,i+1)
    console.log(i)
}
backtracking2(4) */
