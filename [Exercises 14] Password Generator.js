function changeVocals(str) {
    var alfabetLower = 'abefijopuv'
    var alfabetUpper = 'ABEFIJOPUV'
    var output = '';
    found = false

    for(var i = 0; i < str.length; i++){
      if(str[i] === ' '){
        output = output + ' '
      }
      for(var j = 0; j < alfabetLower.length; j=j+2){
        if(str[i] === alfabetLower[j]){
          output = output + alfabetLower[j+1];
          found = true
          break;
        } 
        else if(str[i] === alfabetUpper[j]){
            output = output + alfabetUpper[j+1]
            found = true
            break;
        }
        else{
            found = false
        }
      }
      if(found == false){
          output = output + str[i]
      }
    }
    return output
}

function reverseWord (str) {
  //code di sini
  var i;
  var balik = '';

  for (i = str.length - 1; i >= 0; i--) {
    balik += str[i];
  }
  return balik;
}

function setLowerUpperCase (str) {
  //code di sini
  var alfabetLower = 'abcdefghijklmnopqrstuvwxyz';  
  var alfabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var tampung = ''

  for (var i = 0; i < str.length; i++) {
    var found = false;
      for (var j = 0; j < alfabetLower.length; j++) {
        if (str[i] === alfabetLower[j]) {
        tampung = tampung + alfabetUpper[j];
        found = true; 
        }
        else if (str[i] === alfabetUpper[j]) {
        tampung = tampung + alfabetLower[j];
        found = true;
        }
      } 
      if (found === false) {
      tampung = tampung + str[i];
      }
  }
  return tampung;
}

function removeSpaces (str) {
  //code di sini
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  //code di sini
  var changeVoc = changeVocals(name)
  var reverse = reverseWord(changeVoc)
  var ubahHuruf = setLowerUpperCase(reverse)
  var hilangSpace = removeSpaces(ubahHuruf)

  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  return hilangSpace
}

// console.log(changeVocals('Sergei Dragunov'));

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
