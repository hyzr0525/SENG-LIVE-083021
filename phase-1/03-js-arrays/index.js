


// what does an array look like? How to create an array, how do we use arrays

// array literal
const pokemons = ['pikachu', 'bulbasour','jigglypuff']

// access elements in an array
// every element has an associate index, we use these index to accuss the elements inside array

console.log(pokemons[1])

//issues with accessing elements through index?
//elements can change inside of an array
//we can access index that doesnt exist
//*** you may have a much larger amount of elements in the array, and you don't always know the index number */

pokemons[2] = 'Jigglypuff' // change elements in array.

pokemons[pokemons.length -1] // to access the last element in an array

// adding elements in an array
/* .push add element to the end of an Array, returns the length of the new array. it is destructive*/

pokemons.push("Spearow")

/* unshift add element to the beginning of an array. return value is the length of the array */

pokemons.unshift("Arbok")

// spread operator. Creates a copy of the original array, non destructive. and you can put it anywhere */

let newPokemons = [...pokemons, "Pikachu"]

// removing elements from array
// .slice

// .pop will remove and return the last item of an array
let lastelement = pokemons.pop()
console.log(lastElement)

// .shift removes the first element of an array

let firstElement = pokemons.shift()
console.log(firstElement)

// .slice, non destructive return a portion of the array, or a complete copy

let copyPokemons = pokemons.slice(0, 5) // it copys the portions of the origional array and make a new copy
console.log(copyPokemons)

//pass by value vs pass by reference
//primitive types are pass by values
//non primitives are pass by reference

//pass by value: retains original value but will pass the value on

let x = 2

function squre(num){
    return num = num * num
}

let result = square(x)
console.log(result)
console.log(x)

// pass by reference any changes made to a reference of the data will be reflected in the original state

const copyOfPokemon = pokemons
copyOfPokemons.pop()
console.log(conpyOfPokemons)
console.log(pokemons)

const copyOfPokemon = [...pokemons] // the bracket makes a new copy so it doesn't effect the origional
copyOfPokemons.pop()
console.log(conpyOfPokemons)
console.log(pokemons)


// looping

// .forEach() step inside the array, and deal with each element individually as it loops through the array

pokemons.forEach(funchtion(character){
    console.log(character)
})

/* pokemons.forEach(funchtion(character) => {
    console.log(character)
}) */

//.map is non distructive

let newPokemon = pokemons.map(function(character){
    console.log(character.toLowerCase())
})



