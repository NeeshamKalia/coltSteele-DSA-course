const a = [3,5,2,1]
function product(a) {
    if (a.length ==0) {return 1}
    return a[0] * product(a.splice(1))

}
console.log(product(a))
