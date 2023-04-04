/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  let total=0;
  for(const x of arr){
    if(typeof(x)!="number") return undefined;
    if(Math.abs(x**3%2)==1) total+=(x**3)
  }
  return total;
}
