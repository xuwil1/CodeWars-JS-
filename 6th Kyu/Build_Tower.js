/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

    [
      "  *  ",
      " *** ", 
      "*****"
    ]
And a tower with 6 floors looks like this:

    [
      "     *     ", 
      "    ***    ", 
      "   *****   ", 
      "  *******  ", 
      " ********* ", 
      "***********"
    ]
*/

function towerBuilder(nFloors) {
  //create temporary array to hold tower
  let temp=[];
  for(let i=0; i<nFloors;i++){
    //create temporary string to hold tower blocks of floor 
    let s="";
    //create spaces on left side of tower block(s)
    s=space(s,(nFloors-(i+1)));
    //create tower blocks on appropriate floor
    s=stars(s,(2*i+1));
    //create spaces on left side of tower block(s)
    s=space(s,(nFloors-(i+1)));
    temp.push(s);
  }
  return temp;
}
//helper function to create spaces
function space(s,n){
  while(n>0){
    s+=" ";
    n--;
  }
  return s;
}
//helper function to create stars 
function stars(s,n){
  while(n>0){
    s+="*";
    n--;
  }
  return s;
}
