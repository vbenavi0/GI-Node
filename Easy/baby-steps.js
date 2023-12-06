var sum = 0;
// console.log(process.argv)
var nums = process.argv
// console.log(nums);
for(let i = 2; i<nums.length;i++){
    sum+=parseInt(nums[i])
}
console.log(sum);