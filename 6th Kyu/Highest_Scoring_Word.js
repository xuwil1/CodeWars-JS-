/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let num=x.split(' ').map((x)=>{
    let total=0;
    for(const c of x){
      total+=c.charCodeAt(0)-96;
    }
    return total
  });
  let max=0
  for(let i=1;i<num.length;i++){
    if(num[i]>num[max]) max=i
  }
  return x.split(' ')[max]
}
