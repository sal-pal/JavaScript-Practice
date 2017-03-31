function truncateString(str, num) {
  var dots = "...";
  if (str.length > num) {
    if (num <= 3) {
      return str.slice(0, num) + dots;
    }
    
    else {
      return str.slice(0, num-3) + dots;
    }
  } 
  else if (str.length <= num) {
      return str;
  }
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
