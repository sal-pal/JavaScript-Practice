
function confirmEnding(str, target) {
  var endStr = str.substring(str.length-target.length)
  if (endStr === target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");
