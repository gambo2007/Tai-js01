var twoSum = function(nums, target) {
    let conNum = nums.length;

    if(conNum > Math.pow(10,4) || conNum < 2 || target >10**9 || target < (-10)**9 ){
        return undefined;
    }


    for(let i = 0 ;i< conNum;i++){
        if(nums[i] >10**9 || nums[i] <(-10)**9){
            return undefined;
        }
        for(let j =i+1;j<conNum;j++){
            if (nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return null;
};

let nums= [2,7,11,15];
let target = 9
console.log(twoSum(nums,target));