/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  let temp=[]
  for(let i=0;i<=25;i++){
    temp.push(0);
  }
  string=string.toLowerCase().replace(/[^a-z]/gi, '');
  for(const x of string){
    let letter=x.charCodeAt(0) - 97;
    if(temp[letter]==0){
      temp[letter]=1
    }else{
      temp[letter]++;
    }
  }
  return Math.min(...temp)>=1;
}
