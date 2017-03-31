function palindrome(str) {
  var oldStr = str.replace(/ /g, "").replace(/[^0-9a-z]/gi, '').toLowerCase();
  var newStr = oldStr;
  var revStr = newStr.split("").reverse().join("");
  if (oldStr === revStr) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
