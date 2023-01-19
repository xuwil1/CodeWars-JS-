/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  let counter=0;
  arr.forEach(x=>{
    if(checkSmiley(x)) counter++;
  })
  return counter;
}

function checkSmiley(x){
  x=x.split('');
  if(x[0]==":"||x[0]==";"){
    if(x.length==2){
      if(x[1]==')'|| x[1]=='D') return true;
    }else{
      if(x[1]=='-'|| x[1]=='~'){
        if(x[2]==')'||x[2]=='D') return true;
      }
    }
  }
  return false;
}
