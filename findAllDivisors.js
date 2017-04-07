/**
    Finds all divisors of an integer (divisors can be positive or negative).
    
        Input: 
            input (number): the number to find all divisors for
            
        Output:
            An array containing all divisors
**/

function makeNegativeFromPositive (input) {
    var inputIsNotNumber = (typeof input !== 'number')
    var inputIsNegative = isNaN(Math.sqrt(input))
    if (inputIsNotNumber || inputIsNegative) {
         throw new TypeError("Need to pass a positive integer")
    }
    var str = input.toString()
    str = "-" + str
    var negNum = parseInt(str)
    return negNum
    
}

function main(input) {
    var inputIsNotNumber = (typeof input !== 'number')
    if (inputIsNotNumber) {
    	throw new TypeError("Need to pass an integer")	
    }
    var divisors = []
    for (num=1; num <= input; num++) {
    	var numIsDivisor = (input % num === 0)
        if (numIsDivisor) {
            var negNum = makeNegativeFromPositive(num)
            divisors.push(num, negNum)
        }
    }
    return divisors
}
