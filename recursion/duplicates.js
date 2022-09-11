const arr = [23, 23, 25, 26, 27, 28, 29, 30,30, 31, 31, 25]

function duplicates(arr) {
    let freq = new Map()
    for(let i in arr){
        if(freq.get(arr[i]) == undefined){ freq.set(arr[i],1) }
        else freq.set(arr[i],freq.get(arr[i])+1)
    }
    let res = []
    for(let pairs of freq){
        if (pairs[1] > 1) { res.push(pairs[0]) }

        }return res;
    }

console.log(duplicates(arr));
