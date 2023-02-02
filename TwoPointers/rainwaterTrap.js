/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6  */



const trap = (height,n) =>{
    const left = Array(n).fill(0)
    const right = Array(n).fill(0)
    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i<n; i++){
        left[i] = Math.max(left[i-1], height[i]);
        right[n-1-i] = Math.max(right[n-i], height[n-1-i])
    }return right;
}

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
let n = height.length;


/* var trap = function(height, n = height.lenght ) {

    const left = [];
    const right = new Array(n)
    left[0] = height[0];
    right[n-1] = right[n-1]
    for(let i = 1; i<n; i++){
        left[i] = Math.max(left[i-1], height[i]);
        right[n-1-i] = Math.max(right[n-i], height[n-1-i]);

    }
    console.log(right)
    let ans = 0;
    for(let j = 0; j<n; j++){
        ans += (Math.min(left[i],right[i])) - height[i]
    }return right;
 }; */

 const t = (height) => {
    let left = [];
    let right = [];
    let n = height.length;

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i<n; i++)left[i] = Math.max(left[i-1], height[i]);
    for(let i = n - 2; i>=0; i--)right[i] = Math.max(right[i+1], height[i]);
    let ans = 0;
    for(let i = 0; i<n; i++) ans+=(Math.min(left[i], right[i])) - height[i];

    return right;}
    console.log(trap(height,n))
