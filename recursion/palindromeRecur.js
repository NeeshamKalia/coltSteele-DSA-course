//Write a function to check if a string is a palindrome using recursion

function palindrome(str, i=0){
    if(i >= str.length /2) return true;
    if(str[i] != str[str.length - 1 -i]) return false;
    return (palindrome(str,i+1))
}
console.log(palindrome("masdsam"))
