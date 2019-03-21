function checkAB(string) {

for (var i = 0; i < string.length; i++) {
  if (string[i] === "a" && string[i+4] === "b") {
    return true
  }
  else {
    if (string[i] === "b" && string[i+4] === "a") {
    return true
    }
  }
}
return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
