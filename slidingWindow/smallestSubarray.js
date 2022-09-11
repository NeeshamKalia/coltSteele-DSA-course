/* Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8]. */


function smallestSubarray(a,s) {
    let sum=0, window = -1, count
    for (let i = 0; i < a.length; i++) {
        sum += a[i]
        // console.log(sum)
        if (sum => s) {
            window = i;
            break;
        }

    }
    let su=0;
    for (let i = 1; i < a.length; i++) {
         su += a[i]
         //console.log(su)
        if(su => s){
            if(window>0){
              if(i<window){
                window = i
              }
            }
            else window = i;
            break;
        }

    }return window;
}
const a = [2, 1, 5, 2, 3, 2], s=7
console.log(smallestSubarray(a,s))
