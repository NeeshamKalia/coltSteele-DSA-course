//Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.
/* Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Input: [2, 3, 4, 1, 5], k=2
Output: 7 ;  Explanation: Subarray with maximum sum is [3, 4].
*/


//first approach

function maxSum(a,k) {
    let sumMax = - Infinity, sum = 0
  for (let i = 0; i < k; i++) {  //taking sum of first subArray of size k
    sum += a[i];

  }

  sumMax = sum
  for (let i = 1; i <= a.length-k; i++) {
    //checking for  further subArrays is their sum is greater than sum of first subArray
   sum = sum + a[i+k-1] - a[i-1]


    if(sum > sumMax){
        sumMax = sum
    }
  }
  return sumMax
}
//second approach



function masSum (a,k){
  let i=0, j =0;
  let sum =0, max = -999
  while(j < a.length){
    sum += a[j];
    if(j - i  + 1 < k){
      j++;
    }
    else if(j - i + 1 == k){
      max = Math.max(sum,max)
      sum = sum - a[i]
      i++;
      j++;
    }
  }return max;
}

//const a = [2, 1, 5, 1, 3, 2], k=3
const b = [2, 3, 4, 1, 5], k=2
console.log(masSum(b,k))
