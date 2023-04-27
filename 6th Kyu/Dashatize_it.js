/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
  if(isNaN(num)){
    return 'NaN'
  }
  
  num=''+Math.abs(num);
  
  if(num.length<=1) return num
  let temp='';
  for(let i=0;i<num.length;i++){
    if(num[i]%2==1){
      temp+= `-${num[i]}-`
    }else{
      temp+=num[i]
    }
  }
  temp=temp.replace(/--/gi,'-');
  if(temp.slice(0,1)=='-') temp=temp.slice(1,temp.length)
  if(temp.slice(-1)=='-') temp=temp.slice(0,temp.length-1)
  return temp
}
