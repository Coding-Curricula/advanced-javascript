console.log('start of file')

// traditional function
function add(a, b){
    return a + b
}

console.log(add(2, 3), 'using traditional function')

// ES6 arrow function
const addArrow = (a, b) => {
    return a + b
}

console.log(addArrow(5, 7), 'using arrow function')

// object desctructuring
const name = "chris"
const age = 30
const location = "New York"

// using object literal shorthand to create an object with properties name, age, and location
const person = {
    name,
    age,
    location
}

//  object destructuring to create an object with properties name, age, and location
console.log(person, 'this is our person')

//  object destructuring to extract values from the person object
const { name: anotherName, age: anotherAge, location: anotherLocation } = person;

// create another person using extracted values
const anotherPerson = {
    name: anotherName,
    age: anotherAge,
    location: anotherLocation
}

console.log(anotherPerson, 'this is another person created using destructured values')