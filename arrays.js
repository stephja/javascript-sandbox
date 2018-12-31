//Variables
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let array2 = [  
    {"name":"Ram", "email":"Ram@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"}  
];

let array3 = [  
    {"name":"Shyam", "email":"shyamjaiswal@gmail.com"},  
    {"name":"Bob", "email":"bob32@gmail.com"},  
    {"name":"Jai", "email":"jai87@gmail.com"}  
];

//Functions
let hasLetterS = item => item.toLowerCase().includes('s')
let startsWithLetterS = item => item.toLowerCase().startsWith('s')
let appendLetterS = item => item + 's'

//Logs

console.log(days.sort())

console.log(Array.isArray(days))

console.log(days.filter(startsWithLetterS));
console.log(days.filter(hasLetterS))

console.log(days.length)

console.log(days.sort().map(appendLetterS))

//The push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(days.push("Whateversday", "Beersday"))
console.log(days.sort())

console.log(days.reverse())


