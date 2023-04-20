/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

function automorphic(n){
  if ((n*n).toString().slice(-(''+n).length)==''+n) return 'Automorphic'
  return 'Not!!';
}
