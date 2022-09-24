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


//leetcode a man, a plan, a canal: Panama

var isPalindrom = function(s) {
    s = s.toLowerCase(), b = ""
    for(let i =0; i<s.length; i++){
        if(s[i].match(/^[0-9a-zA-Z]+$/)){
            b += s[i]

        }
    }
    for(let j =0; j < b.length; j++){
        if(b[j] !== b[b.length -1 - j]) return false;
    }return true;
};
console.log(isPalindrom("A man, a plan, a canal: Panama"))
