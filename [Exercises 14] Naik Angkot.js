function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var indexStart;
  var indexFinish;
  var total = 0;
  var output = [] //kalo didalem for, pas ngepush arraynya kosong lagi

  for (var i = 0; i < arrPenumpang.length; i++) {
    for (var j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] === rute[j]) {
        indexStart = j
      }
      if (arrPenumpang[i][2] === rute[j]) {
        indexFinish = j
      } 
    }
  
    var jarak = (indexFinish-indexStart)
    total = (jarak*2000)

   var temp = {}
    temp.penumpang = arrPenumpang[i][0];
    temp. naikDari = arrPenumpang[i][1];
    temp.tujuan = arrPenumpang[i][2]
    temp.bayar = total;

    output.push(temp);
  }
 return output
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
