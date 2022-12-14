/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.  */


function merge(arr){
    if(arr.length <= 1) return arr;
    arr.sort((a,b) => a[0] - b[0])

    for(let i =0; i<arr.length; i++){
        let current = arr[i];
        let next = arr[i+1]
        if(i !== arr.length - 1 && current[1] >= next[0]){
            current[1] = Math.max(current[1], next[1])
            arr.splice(i,2,current)
            i--;
        }
    }return arr;
}

console.log(merge([[1,4],[0,2],[3,5]]))
