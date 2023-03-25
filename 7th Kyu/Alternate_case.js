/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  let temp="";
  for(let i=0;i<s.length;i++){
    if(s[i]==s[i].toLowerCase()){
      temp+=s[i].toUpperCase();
    }else{
      temp+=s[i].toLowerCase();
    }
  }
  return temp;
}
