function longestConsecutive(nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }

    let longestStreak = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num - 1]) {
        } else {
            let currentNum = num;
            let currentStreak = 1;

            while (map[currentNum + 1]) {
                currentNum = currentNum + 1;
                currentStreak = currentStreak + 1;
            }

            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            } else {
            }
        }
    }

    return longestStreak;
}
