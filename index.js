// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    if (x >= 42) {
        return x - 42;
    }
    else {
        return 42 - x;
    }
}

console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(x) {
    return distanceFromHqInBlocks(x) * 264;
}

console.log(distanceFromHqInFeet(43));


function distanceTravelledInFeet(x, y) {
    if (x >= y) {
        return (x - y) * 264;
    }
    else {
        return (y - x) * 264;
    }
}

console.log(distanceTravelledInFeet(50, 42));

function calculatesFarePrice(x, y) {
    if (distanceTravelledInFeet(x, y) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(x, y) > 400 && distanceTravelledInFeet(x, y) <= 2000) {
        return (distanceTravelledInFeet(x, y) - 400) * .02;
    }
    else if (distanceTravelledInFeet(x, y) > 2000 && distanceTravelledInFeet(x, y) < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }

}