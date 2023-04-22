/*
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/

function min(arr, toReturn) {
  let ret;
  if(toReturn=='value'){
    ret = arr[0];
  }else{
    ret = 0
  }
  let pointer=arr[0];
 for(let i=1;i<arr.length;i++){
   if(pointer>arr[i]){ 
     pointer=arr[i];
    if(toReturn=='value'){
        ret = arr[i];
      }else{
        ret = i
    }   
   }
 }
  return ret
}
