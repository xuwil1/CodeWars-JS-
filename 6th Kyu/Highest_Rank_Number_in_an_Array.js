/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr){
//Your Code logic should written here
  arr=arr.sort((a,b)=>a-b);
  let occurrence=1;
  let maxOccur=1;
  let max=arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i]==arr[i-1]){
      occurrence++;
    }else{
      if(maxOccur<=occurrence){
        maxOccur=occurrence;
        max=arr[i-1];
        occurrence=1;
      }else{
        occurrence=1;
      }
    }
  }
  if(maxOccur<=occurrence){
    max=arr[arr.length-1];
  }
  return max;
}
