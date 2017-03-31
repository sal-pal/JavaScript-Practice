function chunkArrayInGroups(arr, size) {
  var multiArr = [[]];
  var elem = 0;
    for (var i = 1; i <= arr.length; i++) {
      
      if (i % size === 0 && i === arr.length) {
        multiArr[elem].push(arr[i-1]);
      }
      
      else if (i % size === 0) {
        multiArr[elem].push(arr[i-1]);
        multiArr.push([]);
        elem++;
      }
      else {
        multiArr[elem].push(arr[i-1]);
      }
    }
  
  
  return multiArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);