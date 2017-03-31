
function titleCase(str) {
  str = str.toLowerCase();
  var arr = str.split(" ");
  var capsArr = arr.map(function(str) {
    var subStr = str.split("");
    subStr[0] = subStr[0].toUpperCase();
    return subStr.join("");
  });
  return capsArr.join(" ");
}

titleCase("I'm a little tea pot");
