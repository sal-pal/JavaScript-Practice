function decode(char) {
	var decChar = char.charCodeAt();
	if (decChar < 78) {
  	return String.fromCharCode(decChar+13);
	}
  
  else {
  	return String.fromCharCode(decChar-13);
  }
}


function rot13(str) {
  var decodeArr = [];
  var arrStr = str.toUpperCase().split("");
  
  for (var elem=0; elem < arrStr.length; elem++) {
    var char = arrStr[elem];
    
    if (/^[A-Z]/.test(char)) {
      decodeArr.push(decode(char));
    }
    
    else {
      decodeArr.push(char);
    }
  }
  
  return decodeArr.join("");
}


rot13("SERR PBQR PNZC");


