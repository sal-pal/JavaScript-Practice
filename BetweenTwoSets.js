/**
    Solution to a problem on hackerrank: https://www.hackerrank.com/challenges/between-two-sets
**/

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    
    var totalBtwnVals = 0
    
    //Find the min and max values
    var min = a[a.length - 1]
    var max = b[0]

    var domain = range(min, max)
    
    domain.forEach((elem) => {
        //Bug is in either or both of the functions
        var elemIsBetweenValue = isMultipleOfAllValues(elem, a) && isFactorOfAllValues(elem, b)
        if (elemIsBetweenValue) {
            totalBtwnVals += 1
        }
    })
    console.log(totalBtwnVals)
}

function range (min, max) {
    var minIsNotNumber = (typeof min !== 'number')
    var maxIsNotNumber = (typeof max !== 'number')
    
    if (minIsNotNumber) {
        throw new TypeError("Need to pass number for min parameter")
    }
    if (maxIsNotNumber) {
        throw new TypeError("Need to pass number for max parameter")
    }
    if (min > max) {
        throw new TypeError("min needs to be greater than max")
    }
    var arr = []
    for (var i=min; i <= max; i++) {
        arr.push(i)
    }
    return arr
}

function isMultipleOfAllValues (x, arr) {
    for (var i=0; i < arr.length; i++) {
        var elem = arr[i]
        if (x % elem > 0) {
            return false
        }
    }
    return true
}

function isFactorOfAllValues (x, arr) {
    for (var i=0; i < arr.length; i++) {
        var elem = arr[i]
        if (elem % x > 0) {
            return false
        }
    }
    return true
}
