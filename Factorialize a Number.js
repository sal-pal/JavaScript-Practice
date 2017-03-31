
function factorialize(num) {
  var i = num;
  
  if (num === 0) {
    return 1;
  }
  
  else {
      while (i > 1) {
        i--;
        num *= i;
    }
  }
  return num;
}

factorialize(5);