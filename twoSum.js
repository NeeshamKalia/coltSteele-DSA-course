//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.


let  twoSum = function(nums, target) {
    const res = [];
    for(let i=0; i<nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){

                res.push(i,j);
            }
        }
    }return res;
};

var twoSumm = function(nums, target) {
    const res = []
    let freq = new Map();
    for(let i=0; i<nums.length; i++){
        if(freq.get(target - nums[i]) == undefined){
            freq.set(nums[i],i)
        }
        else {
            res.push(i,freq.get(nums[target - nums[i]]))

                    }
    }return res;
};


console.log(twoSum vvv v        ([1,2,3,4,5],8))
