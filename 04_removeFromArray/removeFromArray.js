const removeFromArray = function(myArray, ...args) {
    
    return myArray.filter((item) => !args.includes(item));
    
  
};

// Do not edit below this line
module.exports = removeFromArray;
