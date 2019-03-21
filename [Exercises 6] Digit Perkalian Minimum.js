function digitPerkalianMinimum(angka) {
  var arr = [];
  var hasilbagi;
  var tampung = '';
  var output = 0;

  for (var i = 1; i <= angka; i++) {
    hasilbagi = angka / i; //untuk mendapatkan faktornya berapa aja
    tampung = i.toString() + hasilbagi.toString(); //untuk menampung digit dari tiap faktor

    if (hasilbagi % 1 === 0) {
      arr.push(tampung); 
      
      //membandingkan digit yg paling sedikit dari tampung
      if (output === 0) {
        output = tampung.length; 
      } 
      else {
        if (output > tampung.length) {
          output = tampung.length;
        }
      }
    } 
  }
return output
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
