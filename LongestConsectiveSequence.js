// function longestConsecutive(nums) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = true;
//     }

//     let longestStreak = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (map[num - 1]) {
//         } else {
//             let currentNum = num;
//             let currentStreak = 1;

//             while (map[currentNum + 1]) {
//                 currentNum = currentNum + 1;
//                 currentStreak = currentStreak + 1;
//             }

//             if (currentStreak > longestStreak) {
//                 longestStreak = currentStreak;
//             } else {
//             }
//         }
//     }

//     return longestStreak;
// }

//the commented codes take up a lot of run time coz there are many duplicate keywords used and iterating over each if else loop makes it more time consuming
//so we can use numset to make it more efficient


function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}
