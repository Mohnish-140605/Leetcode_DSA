function romanToInt(s) {
    let total = 0;
    let i = 0;

    function valueOf(letter) {
        if (letter === 'I') {
            return 1;
        } else if (letter === 'V') {
            return 5;
        } else if (letter === 'X') {
            return 10;
        } else if (letter === 'L') {
            return 50;
        } else if (letter === 'C') {
            return 100;
        } else if (letter === 'D') {
            return 500;
        } else if (letter === 'M') {
            return 1000;
        } else {
            return 0;
        }
    }

    while (i < s.length) {
        let current = valueOf(s[i]);
        let next = 0;

        if (i + 1 < s.length) {
            next = valueOf(s[i + 1]);
        }

        if (current < next) {
            total = total + (next - current);
            i = i + 2;
        } else {
            total = total + current;
            i = i + 1;
        }
    }

    return total;
}
