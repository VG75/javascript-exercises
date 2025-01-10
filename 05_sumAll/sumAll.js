const sumAll = function (start, end) {
    // Check for invalid inputs
    if (typeof start !== "number" || typeof end !== "number" || start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    // Ensure start is smaller than end
    if (start > end) {
        [start, end] = [end, start]; // Swap using destructuring
    }

    // Calculate the sum
    let ans = 0;
    for (let i = start; i <= end; i++) {
        ans += i;
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
