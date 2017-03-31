
function bouncer(arr) {
  var filtArr = arr.filter(function(val) {
    
    if (val) {
      return true;
    }
    
    else if (isNaN(val)) {
      return false;
    }
    
    else {  
      switch (val) {
        case false:
        case null:
        case 0:
        case "":
        case undefined:
        case NaN:
          return false;
        default:
          return true;
      } 
    }
  });
  return filtArr;
}

bouncer([7, "ate", "", false, 9]);
