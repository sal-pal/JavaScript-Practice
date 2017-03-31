
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  else {
    return str.repeat(num);
  }
  return str;
}

repeatStringNumTimes("abc", 3);
