var sortColors = function(nums) {
    let low =0, mid =0, high = nums.length -1;

    while(mid<=high){
        if(mid ==0){
            low= mid + low;
            mid =  low - mid;
            low = low - mid;
            mid++;
            low++;
            break;
        }
        if(mid == 2){
            mid= mid + high;
            high=   mid - high;
            mid =  mid - high ;
            high--;
            break;
        }
        if(mid ==1){
            mid++;
            break;
        }
    }return nums;
};

console.log(sortColors([2,1,0,2,1,0,0]))
