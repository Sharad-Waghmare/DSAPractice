//Find number of days in a given month


function isLeapYear(year){
    return(((year%4 == 0) && (year%100!=0)) || (year%400==0))
}
function findDayInMonth(month, year){
    if(month < 1 || month > 12){
        console.log(`Invalid month of value ${month}`)
        return;
    }
    if(month==2){
        if(isLeapYear(year)){
            console.log('Month has a 29 days')
        }else{
            console.log('Month has a 28 days')
        }
    }
    else if(month == 4 || month == 6 || month == 9 || month == 11){
        console.log('Month has 30 days')
    }else{
        console.log('Month has 31 days')
    }
}
findDayInMonth( 4, 2004)