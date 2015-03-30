/**
 * Sum of a range
 *
 */
function range(start, end, step) {
    var list = [],
        step = step || 1,
        reverse = start > end?true:false;

    if (step < 0) {
        step *= -1;
        reverse = true;
    }

    if (reverse) {
        for (;start >= end; start-=step) {
            list.push(start);
        }
    }
    else {
        for (;start <= end; start+=step) {
            list.push(start);
        }
    }
    return list;
}

function sum(list) {
    var total = 0;
    for (i in list) {
        total += list[i];
    }
    return total;
}


/**
 * Reversing an array
 *
 */
function reverseArray(list) {
    revList = [];
    for (var i in list) {
        revList.unshift(list[i]);
    }
    return revList;
}

function reverseArrayInPlace(list) {
    var max = list.length, idx = max - 1;
    for (var i=0; i < max; i++) {
        var e = list[idx-i];
        list.push(e);
        list.splice(list.indexOf(e), 1);
    }
    return list
}


/**
 * A list
 *
 */
function prepend(val, list) {
    return {value: val, rest: list};
}


function nth(val, list) {
    if (
        (typeof val === undefined || typeof list === undefined) ||
        (!list.hasOwnProperty('value') || !list.hasOwnProperty('rest'))
    ) {
        return undefined;
    }

    if (list.value === val) {
        return list.rest;
    }

    return nth(val, list.rest);
}


function arrayToList(array) {
    list = {};
    for (var i in array.reverse()) {
        list = prepend(array[i], list);
    }
    return list;
}


function listToArray(list) {
    var array = [];
    while (list.hasOwnProperty('value') && list.hasOwnProperty('rest')) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}


/**
 * Deep equal
 *
 */
function deepEqual(obj1, obj2) {
    if (
        (typeof obj1 === 'object' && typeof obj2 === 'object') &&
        (obj1 !== null || obj2 !== null)
    ) {
        for (var i in obj1) {
            if (!deepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }
    return obj1 === obj2;
}

function deeperDeepEqual() {
    if (arguments.lenght < 2) {
        return true;
    }
    var obj = arguments[0],
        max = arguments.length;
    for (var i=1; i < max; i++) {
        var curObj = arguments[i];
        if (!deepEqual(obj, curObj)) {
            return false;
        }
    }
    return true;
}

