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
    let freq = new Map()
    for(let i =0; i<nums.length; i++){
        if(freq.has(target - nums[i])){
            return [freq.get(target - nums[i]), i]
        }
        else {
            freq.set(nums[i],i)
        }
    }
};


console.log(twoSumm([11,2,-3,4,1,5],9))
