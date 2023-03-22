// Code your solution in this file!


const returnFirstTwoDrivers = function (x) {
    const array = x.slice(0,2)

    return array
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']) 

const returnLastTwoDrivers = function(x) {
    const array = x.slice(2,4)

    return array
}

returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = []
selectingDrivers. push(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)


function createFareMultiplier(x) {
    return function() {
        return x * 5
    }
    
} 

const doubleFunc = createFareMultiplier()

function fareDoubler(x) {
    
    return 2 * x

}

const tripleFunc = createFareMultiplier()

function fareTripler(x) {
    return  3 * x
}

function selectDifferentDrivers(x, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(x)

}

console.log(fareDoubler(10))