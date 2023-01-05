function isPalindrom(s){
   s = s.toLowerCase();
    let b = ''
    for(let i =0; i<s.length; i++){
        if(s[i].match(/^[0-9a-zA-Z]+$/)){
            b += s[i]
        }
    }
    console.log(b)
    for(let i =0; i<b.length; i++){
        if(b[i] !== b[b.length - 1-i]) return false;
    }
    return true;
}
console.log(isPalindrom("A man, a plan, a canal: Panama"))
