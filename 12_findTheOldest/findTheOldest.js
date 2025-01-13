const findTheOldest = function(people) {
    const d = new Date();
    const year = d.getFullYear();

    let maxAge = -1;
    let oldestPerson = {};

    people.forEach(person => {
        const personAge = (person.yearOfDeath ?? year) - person.yearOfBirth; // Using nullish coalescing for clarity
        if (personAge > maxAge) {
            maxAge = personAge; // Update maxAge here
            oldestPerson = person;
        }
    });

    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
