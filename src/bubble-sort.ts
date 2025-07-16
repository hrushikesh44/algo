export default function bubble_sort(nums: number[]){

    for (let i = 0; i < nums.length; ++i){
        console.log("entered 1", i)
        for (let j = 0; j < nums.length - 1 - i; ++j){
            console.log('entered 2', j)
            if(nums[j] > nums[j + 1]){
                const t = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = t;
            }
        }
    }
    console.log(nums)
}