// what is an object?
// collection of data nested inside of {}

// create an object

const pikachu = {
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
} // literal way of creating an object

//accessing property values is done through bracket or dot notation

console.log(pikachu['img']) // bracket notation

console.log(pikachu.img) // dot notation

// bracket vs dot notation

/* dot notations is literal. It can not be used with variables */

/* bracket notation is mor flexible. we can use variables with bracket notation */

function printName(object, property){
    return object[property]
}

console.log(printName(pikachu,'name'))

function printName(object, property){
    return object.property
}

console.log(printName(pikachu,'name'))

//changing property values

pickachu[img] = "www.google.com"
pikachu.img = "www.image.com"

// adding new properties
pikachu['color'] = "yellow"
pikachu.powers = 'thunderbolt'

// removing properties

delete pikachu.powers

// Best practice for modifying objects
// spread operator

let newPikachu = {...pikachu, powers: "thunderbolt"}

// Object.assign()

let copyOfPikachu = object.assign({}, pikachu)

// looping through object
// for ...in

function objLoops(obj){
    // let k = 'name' first loop
    // let k = 'img' second loop
    // let k = 'likes'  third loop

    // for (creating a variable for each key in the object)

    for (const k in obj){
        // creating a variable 'k' for each key in the object being passed into this function
        console.log(obj[k]) // pikachu['img']
    }
}

function objloops(obj){
    for (const k in obj){
        console.log(obj[k])
    }
}







