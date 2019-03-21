function shoppingTime(memberId, money) {

var product = [
  { name  : 'Sepatu Stacattu', 
    price : 1500000
  },
  { name  : 'Baju Zoro',
    price :  500000
  },
  { name  : 'Baju H&N', 
    price :  250000
  },
  { name  : 'Sweater Uniklooh',
    price :  175000
  },
  { name : 'Casing Handphone', 
    price :  50000
  }
]

var arr = [];
var totalHarga = 0;

for (var i in product) {
  if (money >= product[i].price) {
    arr.push(product[i].name);
    totalHarga += product[i].price
  }
  sisa = money - totalHarga;
}

var output = {}; 

output.memberId = memberId;
output.money = money;
output.listPurchased = arr;
output.changeMoney = sisa;

  if (memberId === '' || memberId === undefined && money === undefined) {
    output = "Mohon maaf, toko X hanya berlaku untuk member saja"
  }
    if (money < 50000) {
    output = "Mohon maaf, uang tidak cukup"
  }
return output;
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
