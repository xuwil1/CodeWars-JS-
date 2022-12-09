/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
  let temp=""
  for(let c of message){
      if(c.match(/[a-z]/i)){
        if(c==c.toLowerCase()){ 
          temp+= c.charCodeAt(0)+13>122 ? String.fromCharCode((c.charCodeAt(0)-13)) : String.fromCharCode((c.charCodeAt(0)+13))
        }else{
          temp+= c.charCodeAt(0)+13>90 ? String.fromCharCode((c.charCodeAt(0)-13)) : String.fromCharCode((c.charCodeAt(0)+13))
        }
      }else{
        temp+=c;
      }
  }
  return temp;
}
