// function declaration

/* function init (){
    // perform a task/ write some logic
    console.log("page has loaded, run the program")
    return "this is a return value"
} */

/* const testingFunction = init()
console.log(testingFunction)

// function expressions

/* const createPokemon = function(){
    // anonymous function
    let pokemon = prompt('Which pokemon are you today?')
    return pokemon
} 
    console.log(createPokemon()) */

// arrow function

/* const renderPokemon = () => {
    //
}

// parameters vs arguments (IMPORTANT)

/* parameters are placeholders/variables for a value that is going tyo be passed to a function
    Parameters are used upon function declaration
    variables */

/* function renderPokemon(character){
    //inside here use character
    console.log(`Rendering ${character}`)
}
renderPokemon("pikachu")
renderPokemon("bulbasaur")
renderPokemon("jigglypuff")

// reference vs invokation

// First class functions
/* assign a function t a variable
    passed functions as a argument to other function *** callback function
    use function as a return value for another function *** the function returning a function is referred to as a high order function

/* function sayName(name){
    return `Hi, I'm ${name}`
}
    // accept a function as an argument
    // callback function
/* function greeting(){
    return callback("aysan")
}


// Closures (IMPORTANT for INTERVIEW)
scopes: global/ local scopes 

function createPokemon(){
    let pokemon = "pikachu"
    return function printPokemon(){
        console.log(`The pokemon is ${pokemon}`)
    }
}