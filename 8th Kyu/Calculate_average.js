/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function find_average(array) {
  return array.length ? array.reduce((prev,current)=>prev+current,0)/array.length: 0;
}
