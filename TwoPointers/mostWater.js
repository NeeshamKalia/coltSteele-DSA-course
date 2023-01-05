/* You are given an integer array he
ight of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
height = [1,8,6,2,5,4,8,3,7]
output = 49;
*/

function mostWater(height){
    let maxArea,area,i,j
    [maxArea,i,j] = [0,0,height.length-1]
    while (i<j) {
        if (height[i]>height[j]) {
            area = (j-i) * height[j];
            j--;
        }
        else{
            area = (j-i) * height[i];
            i++;
        }
        maxArea = Math.max(area,maxArea)
    }return maxArea;
}


console.log(mostWater([1,8,6,2,5,4,8,3,7]))
