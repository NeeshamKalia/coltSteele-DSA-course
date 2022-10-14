/* Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target */



/* ar combinationum = function(candidates, target, ans = []) {

function combinations  (candidates, target,i=0, ds= []) {
    if(i>= candidates.length){
        if(target == 0){
            ans.push(ds)

        }
        return;
    }
    if(candidates[i]<= target){
        ds.push(candidates[i])
        combinations(candidates,target-candidates[i], i, ds)
        ds.pop()
    }
    combinations(candidates,target, i+1, ds)
 }
 combinations(candidates,target)
 return ans;
}; */






function combinationSum (candidates,target, i=0, ds=[], ans = []){
    if(i>= candidates.length){
        if(target ==0){
            ans.push(ds)
        }
           // console.log(ans)


    return;
    }
    if(candidates[i] <= target){
        ds.push(candidates[i])
        combinationSum(candidates, target- candidates[i], i, ds, ans)
        ds.pop()
    }
    combinationSum(candidates, target, i+1, ds, ans)
    
}

let candidates = [2,3,6,7]
let target = 7
console.log(combinationSum(candidates,target))
