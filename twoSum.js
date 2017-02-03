var twoSum1 = function(nums, target) {
  var result = [];
  for(var i = 0; i < nums.length - 1; i++) {
    for(var j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        result.push(i,j);
      }
    }
  }
  return result;
};


var twoSum2 = function(nums, target) {
  var track = {};
  for(var i in nums){
    if(track[nums[i]]){
      return [Number(track[nums[i]]), Number(i)];
    }else{
      track[target - nums[i]] = i;
    }
  }
};

console.log(twoSum1([2, 7, 11, 15], 9)); // ===> [0, 1]
console.log(twoSum2([0, 4, 3, 0], 0)); // ===> [0, 3]
