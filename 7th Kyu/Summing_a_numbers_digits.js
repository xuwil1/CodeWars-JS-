/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  if(number<0) number=-number;
  let temp=0;
  while(number>0){
    temp+=Math.floor(number%10);
    Math.floor(number/=10);
  };
  return temp;
}
