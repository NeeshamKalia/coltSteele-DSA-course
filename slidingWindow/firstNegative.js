function printFirstNegativeInteger(n, k, arr) {
    let i =0, j=0;
    const a = []
    while ( j < n){
        if( j - i + 1 < k){
            if(arr[j] < 0){
                a.push(arr[j]);
                i++;
                j++;
            }
    }
    else if (j - i + 1 == k){
        a.push(0)
        i++;
        j++;
    }
}
return a
}
console.log(printFirstNegativeInteger(5,[-8,2,3,-6,10],2))
