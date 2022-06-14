console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return plusNumber + number;
    }
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
        name: "Frodo",
        age: 50,
        score: 85,
        isActive: false,
    },
    {
        name: "Sam",
        age: 38,
        score: 94,
        isActive: true,
    },
    {
        name: "Merry",
        age: 36,
        score: 82,
        isActive: true,
    },
    {
        name: "Pippin",
        age: 26,
        score: 77,
        isActive: false,
    },
];

// users.forEach(function(user) {
//     console.log(user.name);
// });
users.forEach(user => console.log(user.name));

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

const userNamesScores = users.map(function(user) {
    return {name: user.name, score: user.score};
});
console.log(userNamesScores);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");