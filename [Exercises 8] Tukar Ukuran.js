function tukarBesarKecil(string) {

var alfabetLower = 'abcdefghijklmnopqrstuvwxyz';  
var alfabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var tampung = ''

for (var i = 0; i < string.length; i++) {
  var found = false;
    for (var j = 0; j < alfabetLower.length; j++) {
      if (string[i] === alfabetLower[j]) {
        tampung = tampung + alfabetUpper[j];
        found = true; 
      }
      else if (string[i] === alfabetUpper[j]) {
        tampung = tampung + alfabetLower[j];
        found = true;
        }
    } 
    if (found === false) {
      tampung = tampung + string[i];
    }
}
return tampung;
} 

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
