

export default function(array) {
    if (array.length == 0) {
        return "Array is Empty."
    }
    let object = {
        average: average(array),
        min: min(array),
        max: max(array),
        length: array.length,
    };
    return object;
}

//Creating auxillary functions (without array.prototype.staticFunctions)
//Function for average
function average(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}

//Function for min
function min(array) {
    if (array.length === 0) 
        return 0;
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min)
            min = array[i];
    }
    return min;
}

//Function for max
function max(array) {
    if (array.length === 0) 
        return 0;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max)
            max = array[i];
    }
    return max;
}