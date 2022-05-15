/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let temp=s.split(' ');
  temp=temp.map(x=> x.length);
  temp.sort(compareNumbers);
 return temp[0];
}
function compareNumbers(a, b) {
  return a - b;
}
