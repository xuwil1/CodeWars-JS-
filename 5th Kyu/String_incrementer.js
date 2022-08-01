/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (strng) {
  console.log(strng);
  if(strng==''||strng==null){
    return '1';
  }
  let num=strng.split(/(\d+)/g);
  console.log(num);
  if(num.length<2) num[1]=0;
  return num[0].concat(incrementNumber(num[1]));
}


function incrementNumber(num){
  let temp= (Number(num)+1).toString();
  while(temp.length<num.length){
    temp='0'+temp;
  }
  return temp;
}
