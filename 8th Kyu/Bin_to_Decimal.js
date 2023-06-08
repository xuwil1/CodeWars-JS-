/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/

function binToDec(bin){
  bin=bin.split('').reverse();
  let total=0;
  for(let i=0;i<bin.length;i++){
    total+=bin[i]*(2**i)
  }
  return total;
}
