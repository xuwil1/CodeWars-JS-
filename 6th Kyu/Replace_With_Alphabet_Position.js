/*
*/

function alphabetPosition(text) {
  text=text.replace(/[\W_\d\s]/g,'').toLowerCase();
  return text.split('').map(x=>x.charCodeAt(0) - 96).join(' ');
}
