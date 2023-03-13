/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
*/

var encryptThis = function(text) {
  text=text.split(' ');
  text=text.map(x=>encrypt(x));
  return text.join(' ');
}
function encrypt(phrase){
  phrase=phrase.split('');
  phrase[0]=phrase[0].charCodeAt(0);
  let temp=phrase[1];
  phrase[1]=phrase[phrase.length-1];
  phrase[phrase.length-1]=temp;
  return phrase.join('');
}
