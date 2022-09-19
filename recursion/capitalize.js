//capitalize the first alphabet of a string in an array

function capitalize(arr) {
    let result = []
    if(arr.length === 0)return []
    let s = arr[0][0].toUpperCase() + arr[0].slice(1)
    result.push(s)
    return result.concat(capitalize(arr.slice(1)))
}

console.log(capitalize(["abc", "pwf", "thid"]))

