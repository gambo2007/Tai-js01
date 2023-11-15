var threeSum = function(nums) {
    if (nums.length < 3 || nums.length > 3000) {
        return undefined;
    }

    nums.sort((x, y) => x - y);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if(nums[i] >10**5 || nums[i]<(-10)**5){
            return undefined;
        }
        if (nums[i] !== nums[i - 1]) {
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return result;
};

nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));