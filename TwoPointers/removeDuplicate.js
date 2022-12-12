function remove_duplicate(arr,n){
    let j = 1;
    const np = [arr[0]]
    for(let i = 1; i<n; i++){
        if(arr[i] !== arr[i-1]){
            console.log(arr[i])
            np.push(arr[i])

        }
    }
    return np;
}
console.log(remove_duplicate([2,2,2,2,2],3))
