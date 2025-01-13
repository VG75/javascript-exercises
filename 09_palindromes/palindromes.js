const palindromes = function (str) {
    str = str.split(' ').join('').toLowerCase();
    console.log(str);
    let newString = "";
    for (let i = 0; i < str.length; ++i) {
        let ch = str.charCodeAt(i);
        if (
               
            (ch >= 97 && ch <= 122) || // a-z
            (ch >= 48 && ch <= 57) // 0-9
        ) {
            newString += str[i];
        }
    }
    console.log(newString);
    let left = 0, right = newString.length - 1;
    while (left <= right) {
        if (newString[left] != newString[right]) return false;
        left++;
        right--;
    }
    return true;
};

//palindromes('Racecar');

// Do not edit below this line
module.exports = palindromes;
