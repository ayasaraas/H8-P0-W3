function cariMedian(arr) {
  var middle = Math.floor(arr.length / 2); //untuk menentukan nilai indeks ke-tengah dengan membulatkan kebawah

  if (arr.length % 2 === 1) {
    return arr[middle] 
  } //jika panjang string ganjil
  else { 
    return (arr[middle - 1] + arr[middle]) / 2.0;
  } //jika panjang string genap
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
