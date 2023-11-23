class ArrayOperations {
    static getSum(arr) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum;
    }
    static getAvg(arr) {
        let sum = 0;
        for (const num of arr) {
            sum += num;
        }
        return sum / arr.length;
    }
    static getMax(arr) {
        let max = -Infinity;
        for (const num of arr) {
            if (max < num)
                max = num;
        }
        return max;
    }
    static getMin(arr) {
        let min = +Infinity;
        for (const num of arr) {
            if (min > num)
                min = num;
        }
        return min;
    }
}
export default ArrayOperations;
