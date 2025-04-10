function merge(intervals) {
    if (intervals.length === 0) {
        return [];
    }


    intervals.sort(function(a, b) {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return 0;
        }
    });

    const merged = new Array(intervals.length);
    let index = 0;
    merged[index] = intervals[0];

    let i = 1;
    while (i < intervals.length) {
        let last = merged[index];
        let current = intervals[i];

        if (last[1] >= current[0]) {
            if (last[1] < current[1]) {
                last[1] = current[1];
            } else {
            }
        } else {
            index = index + 1;
            merged[index] = current;
        }

        i = i + 1;
    }

    const result = new Array(index + 1);
    let j = 0;
    while (j <= index) {
        result[j] = merged[j];
        j = j + 1;
    }

    return result;
}
