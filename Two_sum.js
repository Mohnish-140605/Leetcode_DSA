function twoSum(nums, target) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const difference = target - current;

        if (seen.hasOwnProperty(difference)) {
            return [seen[difference], i];
        }

        seen[current] = i;
    }

    return [];
}
