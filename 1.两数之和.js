/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 * js几种循环以及跳出方式 https://blog.csdn.net/u014399368/article/details/82862444
 *
 * algorithms
 * Easy (45.62%)
 * Total Accepted:    319K
 * Total Submissions: 699.2K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result=null;
        // 180ms
    // nums.some((val,index)=>{
    //     for(let i=index+1;i<nums.length;i++){
    //         if(val+nums[i]===target){result=[];
    //             result[0]=index;
    //             result[1]=i;
    //             break;
    //         }
    //     }
    //     if(result && result.length===2){
    //         return true;
    //     }else return false
    // })
    // 172ms
    for(let j=0;j<nums.length;j++){
        for(let i=j+1;i<nums.length;i++){
            if(nums[j]+nums[i]===target){result=[];
                result[0]=j;
                result[1]=i;
                break;
            }
        }
        if(result && result.length===2){
            break;
        }else continue;
    }
    return result;
};

