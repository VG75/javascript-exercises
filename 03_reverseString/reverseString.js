const reverseString = function(s) {
    let ans = "";
    let n = s.length;
    for (let i = n - 1; i >= 0; i--) {
        ans += s[i];
    }
   
    return ans;


};

// Do not edit below this line
module.exports = reverseString;
