/* Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11]. */

function removeDuplicates(arr) {
    let i =0, j=1;
    while (j<= arr.length - 1) {
       if(arr[i] != arr[j]){


    }
    else {
        arr.splice(i,1);

    }
    i++
    j++
    }
    return arr;
}
const arr = [2, 2,3, 3, 3, 6, 9, 9];
console.log(rr(arr))



 function rr (nums) {
    let i=0, j=1;
    while( j<nums.length){
        if(nums[i] == nums[j]){
            nums.splice(i,1)
        }
        i++;
        j++;
    }return nums;
};