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
  // build here
  let temp=[];
  for(let i=0; i<nFloors;i++){
    let s="";
    s=space(s,(nFloors-(i+1)));
    s=stars(s,(2*i+1));
    s=space(s,(nFloors-(i+1)));
    temp.push(s);
  }
  return temp;
}

function space(s,n){
  while(n>0){
    s+=" ";
    n--;
  }
  return s;
}
function stars(s,n){
  while(n>0){
    s+="*";
    n--;
  }
  return s;
}
