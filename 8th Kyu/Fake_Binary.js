/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

function fakeBin(x){
  //temp variable to hold string
  let temp=''
  for(let i=0;i<x.length;i++){
    temp+=(Number(x.charAt(i))<5) ? '0' : '1'
  }
  return temp
}
