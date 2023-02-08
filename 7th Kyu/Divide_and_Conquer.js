/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.
*/

function divCon(x){
  let sum=x.filter(num=>typeof(num)=="number").reduce((prev,curr)=>prev+curr,0);
  let diff=x.filter(num=>typeof(num)=="string").reduce((prev,curr)=>parseInt(prev)+parseInt(curr),0);
  return sum-diff
}
