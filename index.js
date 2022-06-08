// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers){
    const firstTwo = [...drivers];
    return firstTwo.splice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    const lastTwo = [...drivers];
    return lastTwo.splice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

function createFareMultiplier(fare) {
    return function(multiplier){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers);
}