class ArrayOperations {

    public static getSum(arr): number {
        let sum = 0;
        for (const num of arr) {
            sum+= num;
        }
        return sum;
    }

    public static getAvg(arr): number {
        let sum = 0;
        for (const num of arr) {
            sum+= num;
        }
        return sum / arr.length;
    }

    public static getMax(arr): number {
        let max = -Infinity;
        for (const num of arr) {
            if(max < num) max = num;
        }
        return max;
    }

    public static getMin(arr): number {
        let min = +Infinity;
        for (const num of arr) {
            if(min > num) min = num;
        }
        return min;
    }
}

export default ArrayOperations;