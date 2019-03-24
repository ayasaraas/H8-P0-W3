function sorting(arrNumber) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 0; i < arrNumber.length-1; i++) {
      for (var j = 0; j < arrNumber.length-i-1; j++) {
      // kalo untuk besar ke kecil, tinggal diganti jadi < aja
      if (arrNumber[j] > arrNumber[j+1]) {
        done = false;
        var tmp = arrNumber[j];
        arrNumber[j] = arrNumber[j+1];
        arrNumber[j+1] = tmp;
      }
      }
    }
  }
return (arrNumber);
}

function getTotal(arrNumber) {

  var angkaMax = (arrNumber[arrNumber.length-1]);
  var frekuensiMuncul = 0;

    for (var i = 0; i < arrNumber.length; i++) {
      if (angkaMax === arrNumber[i]) {
        frekuensiMuncul++;
      }
    } 

  var output =  "angka paling besar adalah " +angkaMax+ " dan jumlah kemunculan sebanyak " +frekuensiMuncul+ " kali"

  if (arrNumber.length === 0) {
    return "''";
  }
  else {
    return output;
  }

}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
