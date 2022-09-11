// reverse each word of string in a given manner
// hi to all => ih ot lla

function revere(sent) {
    let arr = sent.split(' ');
    let result = []
    if(arr.length === 0) return []
    let s = reverse(arr[0])
    result.push(s)
    return result.concat(revere(arr.slice(1)))

}
console.log(revere("Hi this is a lot of work"))
 function reverse(str) {
    if (str.length === 0) return ""
    return (str.slice(1) + str[0])
 }
//console.log(reverse("Hi"))
