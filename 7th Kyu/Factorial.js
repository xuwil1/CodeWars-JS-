/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

const factorial= n=> { return (n>1) ? factorial(n-1) * n : 1;} 
