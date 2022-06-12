/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

    treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
    folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
    trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
    blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
    abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
*/

function longestConsec(strarr, k) {
    if(strarr.length==0||k>strarr.length||k<=0){
      return '';
    }
  let temp=[];
  let base=0;
  let index=k-1;
  temp=cut(strarr,base,index);
  while(index<strarr.length-1){
    base++; index++;
    console.log(index);
    console.log(cut(strarr,base,index).reduce((prev,current)=>prev+current.length,0));
    if(temp.reduce((prev,current)=>prev+current.length,0)<
       cut(strarr,base,index).reduce((prev,current)=>prev+current.length,0)){
      temp=cut(strarr,base,index);
    }
   }

  return temp.join('');
}

function cut(array,base,index){
  let temp=[];
    for(let i=base;i<=index;i++){
    temp.push(array[i]);
  }
  return temp;
}
