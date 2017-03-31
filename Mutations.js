
function mutation(arr) {
  
  var elem1 = arr[0].toLowerCase().split("");
  var elem2 = arr[1].toLowerCase().split("");
  
  for (var i=0; i<elem2.length; i++) {
    
    for (var j=0; j<elem1.length; j++) {
      
      if (elem2[i] === elem1[j]) {
        break;
      }
  
      else if (elem2[i] !== elem1[j] && j === elem1.length - 1) {
        return false;
      }
    }
  }
  return true;
}

mutation(["hello", "hey"]);
