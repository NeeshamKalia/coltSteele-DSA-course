/*   write a function "same" which accepts two arrays. The function should return true if every value in the array  has it's corresponding value squared in the second array. The frequency of values must be same.    */

const a = [2,4,2,6];
const b = [4,16,36];

function same(a,b) {
    if(a.length != b.length) return false;
   let freq1 = new Map(), freq2 = new Map();
   for (let i = 0; i < a.length; i++) {
       if(freq1.get(a[i]) == undefined){
        freq1.set(a[i],1)
       }
       else {
        freq1.set(a[i],freq1.get(a[i])+ 1)
       }
       {
        if(freq2.get(b[i]) == undefined){
            freq2.set(b[i],1)
       }
       else {
        freq2.set(b[i], freq2.get(b[i])+1)
       }
   }
}
for(let [key,value] of freq1){
    if(!(freq2.has(key*key))) return false;
    if((freq2.get(key*key)) !== value){

        return false;
    }
}
return true;
}
console.log(same(a,b))
