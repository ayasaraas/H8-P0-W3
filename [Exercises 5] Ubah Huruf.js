function ubahHuruf(kata) {
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var nextWord = '';

  for (var i = 0; i < kata.length; i++) {
    if (kata[i] === 'z') {
       nextWord = nextWord + alfabet[0]
     }
   for (var j = 0; j < alfabet.length; j++) {
     if (kata[i] === alfabet[j] && kata[i] != 'z') {
       nextWord = nextWord + alfabet[j+1]
     }
   }
  }
  return nextWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
