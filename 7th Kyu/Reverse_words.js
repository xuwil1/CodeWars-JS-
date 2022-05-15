/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  // Go for it
  let temp=str.split(' ')
  temp=temp.map(x=>reverse(x))
  return temp.join(' ')
}

function reverse(x){
  let reverseWord=""
    for(let i=x.length-1;i>=0;i--){
    reverseWord+=x[i];
  }
  return reverseWord;
}
