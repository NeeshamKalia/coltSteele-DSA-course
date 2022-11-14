//Merge two sorted array's

var merge = function(nums1, m, nums2, n) {
    let i = 0, j =0;
    const arr = []
    while(i < m && j < n){
        if(nums1[i] < nums2[j]){
            arr.push(nums1[i])
            i++;
        }
        else if(nums1[i] > nums2[j]){
            arr.push(nums2[j])
            j++
        }
        else{
            arr.push(nums1[i],nums2[j])
            i++;
            j++;
        }
    }
    while(i>m){
        arr.push(nums1[i])
        i++;
    }
    while(j>m){
        arr.push(nums2[j])
        j++;
    }
    return arr;
};

console.log(merge([1,3,5,7], 4, [2,4,6,8],4))
