function getHourAndSuffix (amPmTime, callback) {
    var hour = amPmTime.substr(0, 2)
    var suffix = amPmTime.substr(8, 2)
    return callback(hour, suffix)
}


function main (time) {
    var suffix = time.substr(8, 2)
    
    var isMidnight = getHourAndSuffix(time, function(hour,suffix) {
        if (hour == 12 && suffix === "AM") {
            return true
        }
        else {return false}
    })
    
    var isNoon = getHourAndSuffix(time, function(hour,suffix) {
        if (hour == 12 && suffix === "PM") {
            return true
        }
        else {return false}
    })
    
    if (isMidnight) {  
        var militaryTimeExceptHour = time.substr(2,6)
        var militaryTime = "00" + militaryTimeExceptHour
        console.log(militaryTime)
    }
    
    else if (suffix === "AM") {
        var militaryTime = time.substr(0, 8)
        console.log(militaryTime)
    }
    
    else if (isNoon) {
        var militaryTime = time.substr(0, 8)
        console.log(militaryTime)      
    }
    
    else {
        var hour = time.substr(0,2)
        if (hour[0] === "0") {
            var hour = time.substr(1,1)
            var militaryTimeExceptHour = time.substr(2,6)
            var militaryHour = parseInt(hour) + 12
            var militaryTime = militaryHour + militaryTimeExceptHour
            return console.log(militaryTime)            
        }
        var militaryTimeExceptHour = time.substr(2,6)
        var militaryHour = parseInt(hour) + 12
        var militaryTime = militaryHour + militaryTimeExceptHour
        return console.log(militaryTime)          
    }
    
}
