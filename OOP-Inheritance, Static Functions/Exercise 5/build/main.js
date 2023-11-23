import ArrayOperations from "./arrayOperations.js";
const arr = [];
for (let i = 1; i <= 10; i++) {
    const num = Math.floor(Math.random() * 100) + 1;
    arr.push(num);
}
console.log(arr);
console.log(ArrayOperations.getSum(arr));
console.log(ArrayOperations.getAvg(arr));
console.log(ArrayOperations.getMax(arr));
console.log(ArrayOperations.getMin(arr));
