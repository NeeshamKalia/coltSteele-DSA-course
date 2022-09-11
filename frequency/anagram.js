//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function anagram (s,t){
    s = s.split('');
    t = t.split('');
    if (s.length != t.length) return false;
    let freq1 = new Map(); freq2 = new Map();
    for (let i = 0; i < s.length; i++) {
        if (freq1.get(s[i]) == undefined) freq1.set(s[i], 1)
        else freq1.set(s[i], freq1.get(s[i]) + 1)
        {
        if (freq2.get(t[i]) == undefined) freq2.set(t[i], 1)
        else freq2.set(t[i], freq2.get(t[i]) + 1)
        }
        }

        for(let pair of freq1){
            let pair2 = freq2.get(pair[0]);
            if(pair[1] != pair2){

                return false;
            }
        }
        return true;
    }

console.log(anagram("hello", "olleh"));
