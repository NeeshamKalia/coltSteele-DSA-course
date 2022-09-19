var isPalindrome = function(s) {
    s = s.split(' ').join('')
    
    let i = 0, j = s.length - 1
    while(i<j){
        if(s[i] !== s[j]){
            return false;
        }
        i++;
        j--;
    } return true;
};
console.log(isPalindrome("lalal"))
