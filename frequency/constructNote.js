// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters
// that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or
// special characters in both the message and the letters.

function constructNote(m, l) {
    let freq1 = new Map(), freq2 = new Map();
    for (let i = 0; i < l.length; i++) {
        if(freq1.get(l[i]) == undefined){
            freq1.set(l[i],1)
        }
        else {
            (freq1.set(l[i], freq1.get(l[i]) + 1))
        }

    }
    m = m.split('');
    for(let i =0; i<m.length; i++){
        if(freq1.get(m[i]) < 1){
            
            return false;
        }
        freq1.set(m[i],freq1.get(m[i]) -1)
    }return true;

}


console.log(constructNote('aaaa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
console.log(constructNote('aabbcc', 'bc')); // false
