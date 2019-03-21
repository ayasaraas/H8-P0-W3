function cariModus(arr) {
  var modus = 0;
  var frekuensiTerbanyak = 0;

  //untuk melakukan sorting
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length; i++) {
      // kalo untuk besar ke kecil, tinggal diganti jadi < aja
      if (arr[i - 1] > arr[i]) {
        done = false;
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      } 
     } 
  } //console.log(arr)

//untuk melakukan looping dan perbandingan dari indeks ke i=0 hingga indeks ke j=arr.length
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      var frekuensi = 0;  
      if (arr[i] === arr[j] && i != j) {
        frekuensi++;
        if (frekuensi >frekuensiTerbanyak) {
          frekuensiTerbanyak = frekuensi;
        modus = i;
        }
      }
    } 
  }
  if (frekuensiTerbanyak === 0) {
    return -1;
  }

//untuk melakukan pengecekan jika didalam modus hanya ada 1 nilai yang sama 
  var num = 0;
  for (var a = 0; a < arr.length; a++) {
    num += arr[a];
    if ((num / arr.length) === arr[a]) {
      return -1;
    }
  }
return arr[modus]; 
}

// // TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
