//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


const  containsDuplicate = function(nums) {
    let freq = new Map()
    for(let i=0; i<nums.length; i++){
        if(freq.get(nums[i]) == undefined){
            freq.set(nums[i],1)
        }
        else {
            freq.set(nums[i],freq.get(nums[i])+ 1)
        }
    }
    for(let pair of freq){
        if(pair[1] >= 2){
            return true;
        }

    }
    return false;
};

const arr = [1,2,3,4,5,6,7,8]
console.log(containsDuplicate(arr))
