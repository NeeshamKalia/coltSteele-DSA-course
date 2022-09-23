var threeSum = function(nums) {
    const res = []
    nums.sort((a,b) => a - b)
    for(let i =0; i<nums.length-2; i++){
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i+1, k = nums.length - 1;
        while(j < k){
           
            if(nums[j] + nums[k] == -nums[i]) {
                res.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
                j++
                k--
            }
            else if (nums[j] + nums[k] > -nums[i]) { k-- }
            else {j++}
        }
    }return res;
};

console.log(threeSum( [-1,0,1,2,-1,-4]))
