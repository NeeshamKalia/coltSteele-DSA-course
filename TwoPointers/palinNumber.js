var isPalindrome = function(x) {
    x = "" + x;

    let i =0, j = x.length - 1;
    while(i<j){
        if(Number(x[i]) !== Number(x[j])) return false;
       i++;
       j--;

    }
    return true;
};

console.log(isPalindrome('-121'))
