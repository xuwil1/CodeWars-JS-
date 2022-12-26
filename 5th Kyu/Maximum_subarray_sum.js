/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/
var maxSequence = function(arr){
  if(arr.filter(x=>x>0).length==arr.length){
    return arr.reduce((prev,current)=>prev+current,0);
  }
  let [curr,max]=[0,0];
  for(let i=0;i<arr.length;i++){
    curr+=arr[i];
    if(curr<=0){
      curr=0;
    }
    max=Math.max(max,curr);
  }
  return max;
}
