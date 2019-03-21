function ubahHuruf(kata) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var urutan = 0; //untuk menampung urutan kata[i] di alfabet
  var nextWord = '';

  for (var i = 0; i < kata.length; i++) {
    urutan = alfabet.indexOf(kata[i]);
    nextWord += alfabet[urutan+1]
  }
  return nextWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
