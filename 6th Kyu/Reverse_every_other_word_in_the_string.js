/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
  if(str.length==0) return '';
  let arr=str.split(' ');
  console.log(arr);
  for(let i=0;i<arr.length;i++){
    if(i%2==1){
      arr[i]=arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ').trim();
}
