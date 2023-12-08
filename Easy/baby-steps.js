var sum = 0;
var nums = process.argv //take in array from input
for(let i = 2; i<nums.length;i++){ //iterate through input array
    sum+=parseInt(nums[i]) //convert array item to int and add it to the sum
}
console.log(sum);